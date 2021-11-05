import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.http.post(environment.api_url + 'auth/me', null)
  }

  checkLogin() {
    this.isLogin = !!localStorage.getItem('token');
    return this.isLogin;
  }
}
