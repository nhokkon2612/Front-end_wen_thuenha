import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../sevices/house.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  house: any;
  media: any;
  isCheckLogin = false;

  constructor(private houseService: HouseService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isCheckLogin = true;
    }
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id: number) {
    this.houseService.getDetail(id).subscribe(res => {
      this.house = res
    })
  }

}
