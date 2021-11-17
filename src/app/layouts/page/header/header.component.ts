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
export class HeaderComponent implements OnInit {
  isCheckLogin = false;
  user: any;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isCheckLogin = true;
    }
    this.getUserInfo();
  }

  getUserInfo() {
    this.authService.getUserInfo().subscribe(res => {
      this.user = res;
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
