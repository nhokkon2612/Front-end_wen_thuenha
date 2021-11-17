import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../sevices/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  image = '';
  user: any;
  form?: FormGroup;
  data = this.form?.value;
  name: any;
  phone?: any;
  gender?: any;
  address?: any;


  constructor(
    private router: Router,
    private updateUserService: AuthService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getUser();
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      image: [''],
    })
    this.updateUserService.updateUser(this.data).subscribe(res => {
      this.form?.setValue({
        name: res.name,
        email: res.email,
        phone: res.phone,
        gender: res.gender,
        address: res.address,
        image: res.image
      })
    })
  }

  submit() {
    this.form?.controls.image.setValue(this.image);
    let data = this.form?.value;
    this.updateUserService.updateUser(data).subscribe(res => {
        if (res.status == 'success') {
          Swal.fire('Thêm thông tin thành công', 'Chúc bạn vui vẻ', 'success')
          this.router.navigate(['']);
        } else {
          Swal.fire('Thêm thông tin không thành công', 'vui lòng nhập lại', 'error')
          this.router.navigate([''])
        }
      }
    );
  }

  getUser() {
    this.updateUserService.getUserInfo().subscribe(res => {
      this.user = res
    })
  }

  uploadImage(event: string) {
    this.image = event;
  }

}
