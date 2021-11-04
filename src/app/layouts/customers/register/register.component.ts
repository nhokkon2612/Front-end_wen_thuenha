import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from "../../../services/register.service";
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private registerService: RegisterService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  form = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(13)]],
    confirmPassword: ['', Validators.required]
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    let data = this.form.value;
    this.registerService.register(data).subscribe(
      res => {
        if (res.status == 'success') {
          this.router.navigate(['login']);
        } else {
          this.router.navigate(['register']).then(() => {
            window.location.reload()
          });
        }
      }
    )
  }
}
