import {Component, OnInit} from '@angular/core';
import {HouseService} from "../../../sevices/house.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  isCheckLogin = false;

  constructor(private productService: HouseService) {
  }

  ngOnInit(): void {
    this.getList();
    if(localStorage.getItem('token')){
      this.isCheckLogin = true;
    }
  }

  getList() {
    this.productService.getList().subscribe(res => {
      this.products = res;
    })
  }
}
