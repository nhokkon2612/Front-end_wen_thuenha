import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any = [];

  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get(environment.api_url + 'list');
  }


  createProduct(data: any): Observable<any> {
    return this.http.post(environment.api_url + 'create', data);
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
    return this.http.get(environment.api_url + 'auth/me');
  }
  getDetail(id: number): Observable<any> {
    return this.http.get(environment.api_url + 'home/' + id + '/detail');
  }
}
