import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from 'src/app/sevices/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private product: any;

  constructor(private productService: ProductService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
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
