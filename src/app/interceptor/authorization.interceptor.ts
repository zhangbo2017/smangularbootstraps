// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { AuthorizationService } from '../service/authorization';


// @Injectable()
// export class AuthorizationInterceptor implements HttpInterceptor {

//   constructor(private auth:AuthorizationService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     // Get the auth token from the service.
//     const authToken = this.auth.getAuthorizationToken();
//     console.log('authToken：'+authToken)
//     /*
//     * The verbose way:
//     // Clone the request and replace the original headers with
//     // cloned headers, updated with the authorization.
//     const authReq = req.clone({
//       headers: req.headers.set('Authorization', authToken)
//     });
//     */
//     // Clone the request and set the new header in one step.
//     const authReq = req.clone({ setHeaders: { Authorization: authToken } });

//     // send cloned request with header to the next handler.
//     return next.handle(authReq);
//   }
// }
