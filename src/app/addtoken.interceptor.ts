import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddtokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let checkRequest = request;
    const token = window.localStorage.getItem("token");
    if(token!=null){
      checkRequest = request.clone({headers: request.headers.set('Authorization',token)});
    }
    return next.handle(checkRequest);
  }
}
export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AddtokenInterceptor, multi: true}
]
