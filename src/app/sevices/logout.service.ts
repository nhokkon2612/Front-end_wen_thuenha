import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor( private http: HttpClient) { }
  logout():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/logout');
  }
}
