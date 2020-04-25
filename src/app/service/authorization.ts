import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
    getAuthorizationToken() {
      return localStorage.getItem('JWT-Token');
    }
  }