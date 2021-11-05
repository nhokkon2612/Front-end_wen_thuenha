import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from "../../../sevices/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup | undefined;
  errorLogin:string = '';

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      "email": ["", [Validators.required, Validators.email]],
      "password": ["", [Validators.required, Validators.minLength(6), Validators.maxLength(13)]]
    })
  }


  onSubmit() {
    let data = this.formLogin?.value;
    this.loginService.login(data).subscribe(res => {
      console.log(res.access_token)
      if (res.status == 'error') {
        this.errorLogin = res.message;
      } else {
       localStorage.setItem('token', res.access_token);
        this.router.navigate([''])
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
