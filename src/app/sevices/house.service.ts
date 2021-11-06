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

  getDetail(id: number): Observable<any> {
    return this.http.get(this.api_url + 'houses/' + id + '/detail');
  }

  getInforForm(): Observable<any> {
    return this.http.get(this.api_url + 'home/form');
  }

  getUser(): Observable<any> {
    return this.http.get(this.api_url + 'auth/me');
  }
}
