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
    return this.http.get(environment.api_url + 'houses/form');
  }

  getUser(): Observable<any> {
    return this.http.get(environment.api_url + 'auth/me');
  }

  getDetail(id: number): Observable<any> {
    return this.http.get(environment.api_url + 'houses/' + id + '/detail');
  }
}
