import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from 'src/app/sevices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
  }

  infoUsers = this.fb.group({
    "email": ["", [Validators.required, Validators.email]],
    "password": ["", [Validators.required,Validators.minLength(6),Validators.maxLength(13)]]
  })

  // @ts-ignore
  get f() {
    return this.infoUsers.controls
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let data = this.infoUsers.value;
    this.loginService.login(data).subscribe(res => {
      localStorage.setItem('token', res.access_token);
      this.router.navigate(['']).then(()=>{
        window.location.reload();
      })
    })
  }
}
