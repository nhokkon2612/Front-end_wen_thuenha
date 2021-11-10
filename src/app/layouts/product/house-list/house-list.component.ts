import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../sevices/house.service";

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  houses: any;
  isCheckLogin = false;

  constructor(private houseService: HouseService) {
  }

  ngOnInit(): void {
    this.getList();
    if(localStorage.getItem('token')){
      this.isCheckLogin = true;
    }
  }

  getList() {
    this.houseService.getList().subscribe(res => {
      this.houses = res;
    })
  }

}
