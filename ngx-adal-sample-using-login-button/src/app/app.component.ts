import { Component } from '@angular/core';
import { NgxAdalService } from 'ngx-adal-8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-adal-sample-using-login-button';


  
  constructor(private authService:NgxAdalService){

    // Adal Logging
    // window['Logging'] = {
    //   level: 3,
    //   log: (message) => {
    //     console.log(message);
    //   }
    // };

  }


  login(){
    this.authService.login();
  }
  

  logout(){
    this.authService.logout();
  }
  
}
