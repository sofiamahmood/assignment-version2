import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckinSuccessComponent } from './checkin/checkin-success.component';
import { CheckinGuardService } from './checkin/checkin-guard-service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Configuring the application routes
const routes: Routes = [
  { path: 'home', component: HomeComponent} ,
  { path: 'checkin', component: CheckinComponent} ,
  {	path: 'checkin-success', component: CheckinSuccessComponent,
    canActivate: [ CheckinGuardService ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
