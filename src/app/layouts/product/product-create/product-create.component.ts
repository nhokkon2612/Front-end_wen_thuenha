import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HouseService} from "../../../sevices/house.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  formCreateHouse?: FormGroup;
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
  user_id: any = localStorage.user;

  constructor(private houseService: HouseService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getList();
    this.getInforForm();
    this.getUser();
    console.log(this.user_id);
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
      status_id: [''],
    })
  }

  submit() {
    let data = this.formCreateHouse?.value;
    this.houseService.createHouse(data).subscribe(res => {
      if (!status) {
        alert('Đăng nhà cho thuê thành công');
        this.router.navigate(['']).then();
      } else {
        alert('Thất bại')
      }
    })
  }

  getList() {
    this.houseService.getList().subscribe(res => {
      this.houses = res;
    })
  }

  getInforForm() {
    this.houseService.getInforForm().subscribe(res => {
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
    this.houseService.getUser().subscribe(res => {
      this.user = res.name;
    })
  }

}
