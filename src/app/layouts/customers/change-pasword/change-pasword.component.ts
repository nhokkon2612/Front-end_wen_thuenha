import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/sevices/auth.service';
import Swal from "sweetalert2";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LogoutService} from "../../../sevices/logout.service";

@Component({
  selector: 'app-change-pasword',
  templateUrl: './change-pasword.component.html',
  styleUrls: ['./change-pasword.component.css']
})
export class ChangePaswordComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private logoutService: LogoutService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      current_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(13)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(13)]],
      confirmPassword: ['', [Validators.required]],
    },{
      validators: this.MustMatch('password', 'confirmPassword')
    })
  }

  get f() {
    // @ts-ignore
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
  submit(): void {
    let data = this.form?.value;
    console.log(data);
    this.authService.changePasword(data).subscribe(res => {
      if (res.status == 'success') {
        Swal.fire('Đổi mật khẩu thành công', 'Vui lòng đăng nhập hệ thống', 'success')
        localStorage.removeItem('token');
        this.router.navigate(['login']);
        setInterval(() => {
          window.location.reload()
        }, 1000)
      } else {
        Swal.fire('Đổi mật khẩu không thành công', 'Nhập lại mật khẩu', 'error')
        this.router.navigate(['change-pasword'])
      }
    })
  }
}
