import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HouseService} from 'src/app/sevices/house.service';
import {AuthService} from "../../../sevices/auth.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  media:any;
  isCheckLogin = false;
  constructor(private productService: HouseService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isCheckLogin = true;
    }
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    this.getDetails(id);
  }


  getDetails(id: number) {
    this.productService.getDetail(id).subscribe(res => {
      this.product = res
    })
  }
}
