import { Injectable } from '@angular/core';
import { IPO } from './ipo';
import { HttpClient } from '@angular/common/http';
import { LocalURL } from '../../../config/globalconfig';
import { HandleErrorService } from '../../../service/handle-error.service';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IposerviceService {

readonly allIposUrl = LocalURL.serverURL + 'smcprice/search/ipo';
readonly updateipoUrl = LocalURL.serverURL + 'smccompany/admin/manage/ipo';

constructor(
  public http: HttpClient,
  public handleErrorService: HandleErrorService
  ) { }

getIPOs():Observable<any>{
  console.log ('get all IPOs success!');
  console.log ('getAllIposUrl', this.allIposUrl);
  return this.http.get<any>(this.allIposUrl)
    .pipe(
      retry(1), // retry a failed request up to 1 times
      catchError(this.handleErrorService.handleError)
    );
}

getCurrentIpo(ipoID: number):Observable<any>{
  console.log('getCurrentIPO URL', `${this.allIposUrl}/${ipoID}`);
  // return this.http.get(this.updateipoUrl).subscribe(Response =>{})
  return this.http.get<any>(`${this.allIposUrl}/${ipoID}`)
    .pipe(
      retry(1), // retry a failed request up to 1 times
      catchError(this.handleErrorService.handleError)
    );
}

updateIpo(Updateipo: IPO):Observable<any>{
  console.log('updateIPO() done!');
  console.log('updateipoUrl', this.updateipoUrl);
  console.log('Updateipo', Updateipo);
  return this.http.put(this.updateipoUrl, Updateipo)
    .pipe(
      retry(1), // retry a failed request up to 1 times
      catchError(this.handleErrorService.handleError)
    );
}

}
