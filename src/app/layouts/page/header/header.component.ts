import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCheckLogin = false;
  name = ''
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isCheckLogin = true;
      this.name = 'user account';
    }
  }
  logout(){
    window.localStorage.clear();
    window.location.reload();
  }
}
