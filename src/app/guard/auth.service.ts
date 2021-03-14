import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public  _jwtHelper: JwtHelperService) { }

  public GetToken(): string {
    return localStorage.getItem('token');
  }

  public GetCorrelationId(): string {
    return localStorage.getItem('correlationId');
  }

  public isAuthenticated(): boolean {
    const token = this.GetToken();
    return !this._jwtHelper.isTokenExpired(token);;
  }
}
