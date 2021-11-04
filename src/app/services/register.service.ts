import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(data:any):Observable<any>{
    return  this.http.post('http://127.0.0.1:8000/api/auth/register', data)
  }
}
