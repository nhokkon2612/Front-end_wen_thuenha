import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any = [];

  constructor(private http: HttpClient) {
  }

  api_url = 'http://127.0.0.1:8000/api/';

  getList(): Observable<any> {
    return this.http.get(this.api_url + 'list');
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(this.api_url + 'create', data);
  }

  getInforForm():Observable<any>{
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

  getUser():Observable<any>{
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
}
