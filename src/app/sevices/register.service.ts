import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  api_url = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }

  register(data:any):Observable<any>{
    return  this.http.post(this.api_url + 'register', data)
  }
}
