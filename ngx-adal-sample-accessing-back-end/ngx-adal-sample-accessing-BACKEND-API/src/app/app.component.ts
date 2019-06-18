import { Component } from '@angular/core';
import { NgxAdalService } from 'ngx-adal-8';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-adal-sample-accessing-BACKEND-API';

  values: string[];

  constructor(
    private authService:NgxAdalService,
    private apiService:APIService){


    // Adal Logging
    // window['Logging'] = {
    //   level: 3,
    //   log: (message) => {
    //     console.log(message);
    //   }
    // };

  }

  logout(){
    this.authService.logout();
  }

  login(){
    this.authService.login();
  }

  getValues(){
    this.apiService.getValues().subscribe(values => this.values = values);
  }
}
