import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../sevices/house.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../sevices/auth.service";

@Component({
  selector: 'app-user-accout',
  templateUrl: './user-accout.component.html',
  styleUrls: ['./user-accout.component.css']
})
export class UserAccoutComponent implements OnInit {
  isCheckLogin = false;
  image='';
  user: any;

  constructor(private houseService: HouseService,
              private router: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {

    }
    // @ts-ignore
    this.getUser();
  }

  getUser() {
    this.authService.getUserInfo().subscribe(res => {
      this.user = res
      this.isCheckLogin = true;
    })
  }
  uploadImage(event: string) {
    this.image = event;
  }
}
