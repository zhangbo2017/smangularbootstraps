import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CommoninfoService } from '../../../service/commoninfo.service';
import { HandleErrorService } from '../../../service/handle-error.service';
import { catchError, retry } from 'rxjs/operators';
import { password } from '../changeadminpassword/password';
import { LocalURL } from '../../../config/globalconfig';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

    //header
    public httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

  constructor(
    private http: HttpClient,
    public commoninfo: CommoninfoService,
    public handleErrorService: HandleErrorService
) { }

readonly pwdURL = LocalURL.serverURL + 'smcuser/settings';

// Observable<any> 定义返回类型
public updatepw(pwdForm: password): Observable<any> {

    return this.http.post<any>(this.pwdURL, pwdForm, this.httpOptions)
        .pipe(
            // retry(1), // retry a failed request up to 1 times
            catchError(this.handleErrorService.handleError)
        );
}
}
