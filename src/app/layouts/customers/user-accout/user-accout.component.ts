import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../sevices/auth.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-accout',
  templateUrl: './user-accout.component.html',
  styleUrls: ['./user-accout.component.css']
})
export class UserAccoutComponent implements OnInit {
  user: any;

  constructor(private userService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser() {
    this.userService.getUserInfo().subscribe(res => {
      this.user = res
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
