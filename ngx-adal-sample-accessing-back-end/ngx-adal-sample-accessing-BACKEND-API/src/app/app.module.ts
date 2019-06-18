import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAdalModule } from 'ngx-adal-8';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxAdalModule.forRoot({
      // tenant: `YOUR_TENANT_ID (7)`,
      // clientId: `YOUR_CLIENT_ID (6)`,
        // endpoints: {
        //   'API_URL (13)': 'API_CLIENT_ID (12)',
        // },
      tenant: `7cd77541-b916-4e50-905b-905acbd528dc`,
      clientId: `c0622ca0-df1f-4dd2-8175-9dfa840e1dee`,
      endpoints: {
        'https://localhost:44344': '4cee322a-42cc-44f2-9540-9d7fd69b0659',
      },
      
      redirectUri: `frameRedirect.html`, 
      postLogoutRedirectUri: `frameRedirect.html`,
      cacheLocation: 'localStorage',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
