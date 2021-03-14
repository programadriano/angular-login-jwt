import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Usuario } from '../login/models/usuario';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service: HomeService, private _userService: UserService) { }
  usuario: string;

  ngOnInit(): void {
    this.usuario = this._userService.getUser();
    console.log(this.usuario);
    this.getDashboard();
  }

  getDashboard() {
    this._service.getDashboard().subscribe(data => {
      console.log(data);
    })
  }

}
