import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HouseService} from "../../../sevices/house.service";
import {AuthService} from "../../../sevices/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {

  formCreateHouse: FormGroup;
  houses: any;
  statuses: any;
  bedRooms: any;
  bathRooms: any;
  types: any;
  cities: any;
  prices: any;
  areas: any;
  urbanDistricts: any;
  user: any;
  status?: false;
  user_id: any = localStorage.user;
  private router: any;
  image = '';

  constructor(private housesService: HouseService,
              private fb: FormBuilder,
              private authService: AuthService) {
    this.formCreateHouse = this.fb.group({
      detail_address: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      title: new FormControl(null, [Validators.required, Validators.email,Validators.minLength(12)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(24)]),
    })
  }

  ngOnInit(): void {
    this.getList();
    this.getInforForm();
    this.getUser();
    this.formCreateHouse = this.fb.group({
      title: [''],
      squared_id: [''],
      detail_address: [''],
      bedroom_id: [''],
      bathroom_id: [''],
      price_id: [''],
      price: [''],
      category_id: [''],
      description: [''],
      city_id: [''],
      district_id: [''],
      user_id: [''],
      image: ['']
    })
  }

  submit() {
    this.formCreateHouse?.controls.image.setValue(this.image);
    let data = this.formCreateHouse?.value;
    this.housesService.createHouse(data).subscribe(res => {
      if (res.status == 'success') {
        Swal.fire('Đăng ký thành công', 'Vui lòng đăng nhập hệ thống', 'success')
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['create'])
      }
    })
  }

  getList() {
    this.housesService.getList().subscribe(res => {
      this.houses = res;
    })
  }

  getInforForm() {
    this.housesService.getInforForm().subscribe(res => {
      this.statuses = res.allStatus;
      this.bedRooms = res.bedrooms;
      this.bathRooms = res.bathrooms;
      this.types = res.categories;
      this.cities = res.cites;
      this.urbanDistricts = res.districts;
      this.prices = res.levelPrices;
      this.areas = res.levelSquareds;
    })
  }

  getUser() {
    this.authService.getUserInfo().subscribe(res => {
      this.user = res;
    })
  }
  uploadImage(event: string) {
    this.image = event;
  }

}
