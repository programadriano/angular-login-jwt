import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from './models/auth';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;


  constructor(private _formBuilder: FormBuilder, private _loginService: LoginService, private _router: Router
  ) { }

  ngOnInit(): void {
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
      const { token, usuario } = auth;
      console.log(auth);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(usuario));
      this._router.navigate(['/home']);
    })
  }

}
