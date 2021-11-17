import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HouseService} from "../../../sevices/house.service";
import {AuthService} from "../../../sevices/auth.service";
import {ActivatedRoute, Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {
  formEditHouse?: FormGroup;
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
  // @ts-ignore
  id = +this.routers.snapshot.paramMap.get('id');
  image = '';

  constructor(private housesService: HouseService,
              private fb: FormBuilder,
              private authService: AuthService,
              private routers: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getList();
    this.getInforForm();
    this.getUser();
    this.formEditHouse = this.fb.group({
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
      status_id: [''],
      image: ['']
    })
    this.housesService.getDetail(this.id).subscribe(res => {
      this.formEditHouse?.setValue({
        title: res.title,
        squared_id: res.squared_id,
        detail_address: res.detail_address,
        bedroom_id: res.bedroom_id,
        bathroom_id: res.bathroom_id,
        price_id: res.price_id,
        price: res.price,
        category_id: res.category_id,
        description: res.description,
        city_id: res.city_id,
        district_id: res.district_id,
        user_id: res.user_id,
        status_id: res.status_id,
        image: res.image
      })
    })
  }

  submit() {
    this.formEditHouse?.controls.image.setValue(this.image);
    let id = this.id;
    let data = this.formEditHouse?.value;
    console.log(data);
    this.housesService.editHouse(id, data).subscribe(res => {
      if (res.status == 'success') {
        Swal.fire('Edit thành công', 'Vui lòng trải nghiệm', 'success')
        this.router.navigate(['']);
      } else {
        Swal.fire('Edit không thành công', 'Vui lòng thêm lại', 'error')
        this.router.navigate([''])
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
