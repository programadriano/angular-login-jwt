import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): string {
    let usuario: any = JSON.parse(localStorage.getItem('user'));
    return usuario.nome;
  }
}
