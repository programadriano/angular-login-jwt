import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;


  constructor(private _formBuilder: FormBuilder, private _loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.iniciaFormulario();
  }

  iniciaFormulario() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  autentica() {
      console.log(this.loginForm);
  }

}
