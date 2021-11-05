import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from "../../../sevices/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  isCheckLogin = false;
  nameUser = ''
  constructor(private authService: AuthService,
              private router: Router) { }

  ngDoCheck(): void {
    if (localStorage.getItem('token')) {
      this.isCheckLogin = true;
    }
    }

  ngOnInit(): void {
    this.getInfoUserLogin();
    this.isCheckLogin = this.authService.checkLogin();
  }

  getInfoUserLogin() {
      this.authService.getUserInfo().subscribe(res => {
        this.nameUser = res.name
        this.isCheckLogin = true;
        console.log(res)
      })
  }



  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
