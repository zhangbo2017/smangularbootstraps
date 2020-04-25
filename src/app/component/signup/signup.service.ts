import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommoninfoService } from '../../service/commoninfo.service';
import { HandleErrorService } from '../../service/handle-error.service';
import { catchError, retry } from 'rxjs/operators';
import { Signup } from './signup';
import { LocalURL } from '../../config/globalconfig';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient,
    public commoninfoService: CommoninfoService,
    public handleErrorService: HandleErrorService) { }

  readonly signupURL = LocalURL.serverURL + 'smcuser/signup';

    public addUser(signupForm: Signup): Observable<any> {
        console.log('addUser() done!');
        console.log('signupUrl', this.signupURL);
        console.log('signupForm', signupForm);
        return this.http.post<any>(this.signupURL, signupForm, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleErrorService.handleError)
            );
    }

}
