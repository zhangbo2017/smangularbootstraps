import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommoninfoService {

  //GlobalService
  public userId: string;
  public userName: string;
  public userRole: string;
  public infoMessage: string;
  public errorMessage: string;

  constructor() { }
}
