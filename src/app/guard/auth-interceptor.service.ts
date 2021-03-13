import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private _injector: Injector, private _authService: AuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (this._authService.isAuthenticated) {
      const getToken = this._injector.get(this._authService.GetToken());

      const authRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${getToken.token}` },
      });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
