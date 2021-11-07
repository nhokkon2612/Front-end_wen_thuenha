import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from "../../../sevices/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
// @ts-ignore
import Swal from "sweetalert2";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  isCheckLogin = false;
  nameUser = ''

  constructor(private authService: AuthService,
              private router: Router) {
  }

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
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']).then(() => {
      Swal.fire('Bạn đã đăng xuất', 'Vui lòng đăng nhập để trải nghiệm tốt hơn', 'warning')
      setInterval(() => {
        window.location.reload()
      }, 1000)
    });
  }
}
