import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service: HomeService) { }

  ngOnInit(): void {
    this.getDashboard();
  }

  getDashboard() {
    this._service.getDashboard().subscribe(data => {
      console.log(data);
    })
  }

}
