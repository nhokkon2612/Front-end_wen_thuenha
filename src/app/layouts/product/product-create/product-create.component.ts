import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../../sevices/product.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  formCreateProduct?: FormGroup;
  products: any;
  private router: any;
  statuses: any;
  bedRooms: any;
  bathRooms: any;
  types: any;
  cities: any;
  prices: any;
  areas: any;
  urbanDistricts: any;
  users: any;
  status?: false;
  constructor(private productService: ProductService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getList();
    this.getInforForm();
    this.getUser();
    this.formCreateProduct = this.fb.group({
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
    let data = this.formCreateProduct?.value;
    this.productService.createProduct(data).subscribe(res => {
      if(!status){
        alert('Đăng nhà cho thuê thành công');
      } else {
        alert('Thất bại')
      }
    })
  }

  getList() {
    this.productService.getList().subscribe(res => {
      this.products = res;
    })
  }

  getInforForm() {
    this.productService.getInforForm().subscribe(res => {
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
    this.productService.getUser().subscribe(res => {
      this.users = res
    })
  }

}
