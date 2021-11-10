import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../sevices/house.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../sevices/auth.service";
import { RegisterService } from 'src/app/sevices/register.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-accout',
  templateUrl: './user-accout.component.html',
  styleUrls: ['./user-accout.component.css']
})
export class UserAccoutComponent implements OnInit {
  isCheckLogin = false;
  image='';
  user: any;
  form: FormGroup ;
  constructor(private houseService: HouseService,
              private routers: ActivatedRoute,
              private router:Router,
              private authService: AuthService,
              private updateUserService: RegisterService,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(13)]),
      confirmPassword: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {

    }
    // @ts-ignore
    this.getUser();
  }

  submit() {
    let data = this.form.value;
    this.updateUserService.register(data).subscribe(
      res => {
        if (res.status == 'success') {
          // Swal.fire('Đăng ký thành công','Vui lòng đăng nhập hệ thống','success')
          Swal.fire('Đăng ký thành công','Vui lòng đăng nhập hệ thống','success')
          this.router.navigate(['contract']);
        } else {
          this.router.navigate([''])
        }
      }
    );
  }

  getUser() {
    this.authService.getUserInfo().subscribe(res => {
      this.user = res
      this.isCheckLogin = true;
    })
  }
  uploadImage(event: string) {
    this.image = event;
  }
}
