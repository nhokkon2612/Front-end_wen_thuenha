import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../sevices/house.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(private productService: HouseService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.productService.getList().subscribe(res => {
      this.products = res;
    })
  }
}
