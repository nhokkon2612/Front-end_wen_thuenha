import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {RegisterService} from "../../../sevices/register.service";
import Swal from "sweetalert2";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private registerService: RegisterService,
              private router: Router
  ) {
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
    let data = this.form.value;
    this.registerService.register(data).subscribe(res => {
        if (res.status == 'success') {
          // Swal.fire('Đăng ký thành công','Vui lòng đăng nhập hệ thống','success')
          Swal.fire('Đăng ký thành công','Vui lòng đăng nhập hệ thống','success')
          this.router.navigate(['login']);
        } else {
          this.router.navigate(['register'])
        }
      }
    );
  }
}
