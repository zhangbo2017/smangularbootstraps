import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Authresponse {
  
    public name: string;
    public role: string;
    public token: string;
  
  }