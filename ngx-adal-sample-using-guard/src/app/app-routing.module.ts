import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxAdalGuard } from 'ngx-adal-8';
import { SecuredComponent } from './secured.component';
import { UnsecuredComponent } from './unsecured.component';

const routes: Routes = [
  { path: 'secured', component: SecuredComponent, pathMatch:'full', canActivate: [NgxAdalGuard]},
  { path: 'unsecured', component: UnsecuredComponent, pathMatch:'full'},
  { path: '**', redirectTo:'unsecured'}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[SecuredComponent,UnsecuredComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
