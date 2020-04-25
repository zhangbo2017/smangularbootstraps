import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class ParamsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('请求拦截!');
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('JWT-Token')
      }
    });
    return next.handle(modifiedReq);
  }
}
