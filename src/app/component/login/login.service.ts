import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Login } from './login';
import { LocalURL } from '../../config/globalconfig';
import { HandleErrorService } from '../../service/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient,public handleErrorService: HandleErrorService) { }

    readonly loginURL = LocalURL.serverURL + 'login';

    // Observable<any> 定义返回类型
    public findUser(loginForm: Login): Observable<any> {
        console.log('findUser() done!');
        console.log('loginUrl', this.loginURL);
        console.log('loginForm', loginForm);
        return this.http.post<any>(this.loginURL, loginForm, this.httpOptions)
            .pipe(
                retry(1), // retry a failed request up to 1 times
                catchError(this.handleErrorService.handleError)
            );
    }
}
