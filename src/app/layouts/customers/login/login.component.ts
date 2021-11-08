import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from "../../../sevices/login.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  formLogin: FormGroup | undefined;
  errorLogin: string = '';
  successLogin: string = '';

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      "email": ["", [Validators.required, Validators.email]],
      "password": ["", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }
  onSubmit() {
    let data = this.formLogin?.value;
    this.loginService.login(data).subscribe(res => {
      if (res.status == 'error') {
        this.errorLogin = res.message;
      } else {
        this.successLogin = res.message;
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['']).then(() => {
          Swal.fire("Chào mừng", 'Bạn đã đăng nhập thành công', "success")
          setInterval(() => {
            window.location.reload()
          }, 1000)
        })
      }
    })
  }
  get email() {
    return this.formLogin?.get('email')
  }

  get password() {
    return this.formLogin?.get('password')
  }
}
