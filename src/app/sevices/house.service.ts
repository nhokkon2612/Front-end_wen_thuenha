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

  getList(): Observable<any> {
    return this.http.get(environment.api_url + 'houses');
  }

  createHouse(data: any): Observable<any> {
    return this.http.post(environment.api_url + 'houses', data);
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
    return this.http.get(environment.api_url + 'form', httpOptions);
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
    return this.http.get(environment.api_url + 'auth/me', httpOptions);
  }

  getDetail(id: number): Observable<any> {
    return this.http.get(environment.api_url + 'houses/' + id + '/detail');
  }
}
