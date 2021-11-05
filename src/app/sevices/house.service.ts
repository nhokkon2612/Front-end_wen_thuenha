import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private products: any = [];

  constructor(private http: HttpClient) {
  }

  api_url = 'http://127.0.0.1:8000/api/';

  getList(): Observable<any> {
    return this.http.get(environment.api_url + 'houses');
  }

  createHouse(data: any): Observable<any> {
    return this.http.post(this.api_url + 'create', data);
  }

  getInforForm(): Observable<any> {
    let t = localStorage.getItem('token');
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    })
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get(this.api_url + 'form', httpOptions);
  }

  getUser(): Observable<any> {
    let t = localStorage.getItem('token');
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    })
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get(this.api_url + 'auth/me', httpOptions);
  }

  getDetail(id: number): Observable<any> {
    return this.http.get(this.api_url + 'home/' + id + '/detail');
  }
}
