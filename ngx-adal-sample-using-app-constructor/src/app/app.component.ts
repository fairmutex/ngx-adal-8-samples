import { Component } from '@angular/core';
import { NgxAdalService } from 'ngx-adal-8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-adal-sample-using-app-constructor';

  constructor(private authService:NgxAdalService){
    if (!this.authService.isAuthenticated) {
      this.authService.login();
    }

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
}
