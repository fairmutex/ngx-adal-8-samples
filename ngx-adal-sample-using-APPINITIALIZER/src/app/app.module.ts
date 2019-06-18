import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxAdalModule,NgxAdalService } from 'ngx-adal-8';

export function init_app(authService: NgxAdalService) {
  return () => 
      new Promise((resolve, reject) => {
         if(!authService.isAuthenticated) { authService.login(); }
      // else { userService.getProfile(); } 
        resolve();
      });
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
  ],
  providers: [
    [NgxAdalService, { provide: 'adalConfig', useValue: adalConfig }],
    {
    provide: APP_INITIALIZER,
    useFactory: init_app,
    multi: true,
    deps: [NgxAdalService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
