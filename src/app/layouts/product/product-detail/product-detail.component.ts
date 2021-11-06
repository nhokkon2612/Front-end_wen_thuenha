import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HouseService} from 'src/app/sevices/house.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  media:any;

  constructor(private productService: HouseService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    this.getDetails(id);
  }


  getDetails(id: number) {
    this.productService.getDetail(id).subscribe(res => {
      console.log(res);
      this.product = res
    })
  }
}
