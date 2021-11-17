import {Component, OnInit} from '@angular/core';
import {HouseService} from "../../../sevices/house.service";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formSearchHouse?: FormGroup;
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
  image = '';
  // @ts-ignore
  id = this.cities;
  city: any;
  isCheckSearch = false;
  housesSearch: any;
  constructor(private houseService: HouseService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getInforForm();
    console.log('ischeckSearch tren oninit ===> ', this.isCheckSearch)
    this.getList()

    this.formSearchHouse = this.fb.group({
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

  search(event: any) {
    this.isCheckSearch = true;
    let data = event.target.value;
    this.houseService.searchHouse(data).subscribe(res => {
      this.housesSearch = res
    });
  }
}
