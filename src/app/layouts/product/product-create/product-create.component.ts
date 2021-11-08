import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { AuthService } from 'src/app/sevices/auth.service';
import {HouseService} from "../../../sevices/house.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  formCreateHouses?: FormGroup;
  houses: any;
  private router: any;
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

  constructor(private housesService: HouseService,
              private fb: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getList();
    this.getInforForm();
    this.getUser();
    this.formCreateHouses = this.fb.group({
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
    })
  }

  submit() {
    let data = this.formCreateHouses?.value;
    this.housesService.createHouse(data).subscribe(res => {
      if (!status) {
        alert('Đăng nhà cho thuê thành công');
        this.router.navigate(['list']).then();
      } else {
        alert('Thất bại')
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
      this.user = res ;
    })
  }
}
