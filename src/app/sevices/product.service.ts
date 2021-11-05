import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  api_url = 'http://127.0.0.1:8000/api/';

  getList(): Observable<any> {
    return this.http.get(this.api_url + 'list');
  }

  getDetail(id: number): Observable<any> {
    return this.http.get(this.api_url + 'home/' + id + '/detail');
  }
}
