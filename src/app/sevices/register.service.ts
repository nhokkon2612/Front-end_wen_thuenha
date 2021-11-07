import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  register(data:any):Observable<any>{
    return  this.http.post(environment.api_url + 'auth/register', data)
  }
}
