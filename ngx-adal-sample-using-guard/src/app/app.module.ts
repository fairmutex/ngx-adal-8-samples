import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxAdalModule } from 'ngx-adal-8'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAdalModule.forRoot({
      // tenant: `YOUR_TENANT_ID (7)`,
      // clientId: `YOUR_CLIENT_ID (6)`,
      tenant: `7cd77541-b916-4e50-905b-905acbd528dc`,
      clientId: `c0622ca0-df1f-4dd2-8175-9dfa840e1dee`,
      redirectUri: `frameRedirect.html`, 
      postLogoutRedirectUri: `frameRedirect.html`,
      cacheLocation: 'localStorage',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
