import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxAdalModule,NgxAdalService } from 'ngx-adal-8';
import { UserService } from './user.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from 'src/environments/environment';
import { UserProfileData } from './data/profile-mock-data';
import { HttpClientModule } from '@angular/common/http';

export function init_app(authService: NgxAdalService,userService:UserService) {
  console.log("Init App");
  if(!authService.isAuthenticated) { 
    return () => new Promise((resolve, reject) => {
      authService.login(); 
    });
  }
  else{
    return () => userService.getProfile();
   }
}

const adalConfig = {
  // tenant: `YOUR_TENANT_ID (7)`,
  // clientId: `YOUR_CLIENT_ID (6)`,
  tenant: `7cd77541-b916-4e50-905b-905acbd528dc`,
  clientId: `c0622ca0-df1f-4dd2-8175-9dfa840e1dee`,
  redirectUri: `frameRedirect.html`, 
  postLogoutRedirectUri: `frameRedirect.html`,
  cacheLocation: 'localStorage',
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAdalModule,
    HttpClientModule,
    environment.production !== true ? HttpClientInMemoryWebApiModule.forRoot(UserProfileData, { delay: 5000 }) : [],
  ],
  providers: [
    UserService,
    [NgxAdalService, { provide: 'adalConfig', useValue: adalConfig }],
    {
    provide: APP_INITIALIZER,
    useFactory: init_app,
    multi: true,
    deps: [NgxAdalService,UserService]
    },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
