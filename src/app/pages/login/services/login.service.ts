import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  logIn({ username, password }): Observable<Auth> {

    let credencial =
    {
      "username": username,
      "password": password
    }
    return this.http.post<Auth>(`${environment.url}/login`, credencial);
  }
}
