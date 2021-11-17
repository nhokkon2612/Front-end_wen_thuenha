import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {HouseService} from "../../sevices/house.service";
import {ContractService} from "../../sevices/contract.service";
import {AuthService} from "../../sevices/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  house: any;
  renter: any;
  formContract: FormGroup | undefined;

  constructor(private atcRouter: ActivatedRoute,
              private houseDetailService: HouseService,
              private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private contractService: ContractService,
  ) {
  }

  ngOnInit(): void {
    this.getHouseDetail()
    this.getUser()
    this.formContract = this.fb.group({
      renter_id: "",
      leaser_id: "",
      home_id: "",
      renter_email: ["", [Validators.required, Validators.email]],
      renter_phone: ["", [Validators.required]],
      renter_name: ["", [Validators.required]],
      leaser_phone: ["", [Validators.required]],
      leaser_name: ["", [Validators.required]],
      leaser_address: ["", [Validators.required]],
      category: ["", [Validators.required]],
      squared: ["", [Validators.required]],
      level_price: ["", [Validators.required]],
      price: ["", [Validators.required]],
      total_price: ["", [Validators.required]],
      bedroom: ["", [Validators.required]],
      bathroom: ["", [Validators.required]],
      city: ["", [Validators.required]],
      district: ["", [Validators.required]],
      leaser_image: ["", [Validators.required]],
      renter_image: ["", [Validators.required]],
      house_image: ["", [Validators.required]],
    });
  }

  getHouseDetail() {
    // @ts-ignore
    let id = +this.atcRouter.snapshot.paramMap.get('id')
    this.houseDetailService.getDetail(id).subscribe(res => {
      this.house = res
    });
  }

  getUser() {
    this.authService.getUserInfo().subscribe(res => {
      this.renter = res;
      console.log(this.renter);
    })
  }

  onSubmit() {
    let data = this.formContract?.value
    console.log(data);
    this.contractService.newContract(data).subscribe(res => {
      console.log(res)
      if (res.status == "success"){
        this.router.navigate([''])
        Swal.fire("Ký kết thành công", 'Hợp đồng đã được ký kết ! Cảm ơn bạn đã suwe dụng hệ thống của chúng tôi ', "success")

      }
    })
  }

}
