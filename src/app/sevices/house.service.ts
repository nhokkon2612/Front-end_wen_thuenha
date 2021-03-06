import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houses: any = [];

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
    return this.http.post(environment.api_url + 'auth/me', null);
  }

  getDetail(id: number): Observable<any> {
    return this.http.get(environment.api_url + 'houses/' + id + '/detail');
  }

  editHouse(id: number, data: any): Observable<any> {
    return this.http.put(environment.api_url + 'houses/' + id + '/update', data);
  }

  deleteHouse(id:number): Observable<any>{
    return this.http.get(environment.api_url + 'houses/' + id + '/delete');
  }
  searchHouse(id: number): Observable<any> {
    return this.http.get(environment.api_url + 'houses/search/' + id);
  }
}
