import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  getUserInfo(): Observable<any> {
    return this.http.post(environment.api_url + 'auth/me', null)
  }

  updateUser(data:any): Observable<any> {
    return this.http.put(environment.api_url + 'auth/update', data)
  }
  changePasword(data:any): Observable<any> {
    return  this.http.put(environment.api_url + 'auth/changePassword', data)
  }
}
