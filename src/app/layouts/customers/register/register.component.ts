import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
        name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(13)]),
        confirmPassword: new FormControl(null, [Validators.required])
      },
      {
        validators: this.MustMatch('password', 'confirmPassword')
      });

  }

  ngOnInit(): void {
  }


  get f() {
    return this.form.controls;
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({MustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      return this.form.value;
    }
  }
}
