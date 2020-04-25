import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalURL } from '../../../config/globalconfig';
import {Exchange} from './exchange';
import { HandleErrorService } from '../../../service/handle-error.service';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {

  readonly allexchangesUrl = LocalURL.serverURL + 'smcexchange/search/exchange';
  readonly exchangesUrl = LocalURL.serverURL + 'smcexchange/admin/manage/exchange';
  constructor(private http: HttpClient,public handleErrorService: HandleErrorService) { }

  getExchanges(): Observable<any> {
    // console.log ('getExchanges success!');
    console.log ('exchangesUrl', this.allexchangesUrl);
    return this.http.get<any>(this.allexchangesUrl)
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleErrorService.handleError)
      );
  }

  addExchange(Addexchange: Exchange){
    console.log('addExchange() done!');
    console.log('addexchangesUrl', this.exchangesUrl);
    console.log('Addexchange', Addexchange);
    return this.http.post<any>(this.exchangesUrl, Addexchange)
            .pipe(
                retry(1), // retry a failed request up to 1 times
                catchError(this.handleErrorService.handleError)
            );
  }

  getCurrentExchange(Exchangeid: number): Observable<any>{
    console.log('getCurrentExchange URL', `${this.allexchangesUrl}/id/${Exchangeid}`);
    return this.http.get<any>(`${this.allexchangesUrl}/id/${Exchangeid}`)
      .pipe(
        retry(1), // retry a failed request up to 1 times
        catchError(this.handleErrorService.handleError)
      );
  }
  updateExchange(Updateexchange: Exchange): Observable<any>{
    console.log('updateExchange() done!');
    console.log('updateexchangesUrl', this.exchangesUrl);
    console.log('Updateexchange', Updateexchange);
    return this.http.put(this.exchangesUrl, Updateexchange)
      .pipe(
          retry(1), // retry a failed request up to 1 times
          catchError(this.handleErrorService.handleError)
      );
  }
}
