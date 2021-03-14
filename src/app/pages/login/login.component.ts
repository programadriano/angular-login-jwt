import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Auth } from './models/auth';
import { LoginService } from './services/login.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;


  constructor(private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _router: Router,
    private _alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.logOut();
    this.iniciaFormulario();
  }

  iniciaFormulario() {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  autentica() {
    this._loginService.logIn(this.loginForm.value).subscribe((auth: Auth) => {

      if (auth === null)
        return this._alertService.error('', 'Usuário ou senha incorreto(s)!', 'OK');

      const { token, usuario, correlationId } = auth;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(usuario));
      localStorage.setItem('correlationId', uuidv4());
      this._router.navigate(['/home']);
    })
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._router.navigate(['/login']);
  }

}
