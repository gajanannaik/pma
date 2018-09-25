import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { PoliceDetailsComponent } from "./police-details/police-details.component";
import { ComplaintRegisterComponent } from "./complaint-register/complaint-register.component";
import { VictimDetailsComponent } from "./victim-details/victim-details.component";
import { FIRComponent } from "./fir/fir.component";
import { ChargeSheetComponent } from "./charge-sheet/charge-sheet.component";
import { LoginModuleComponent } from './login-module/login-module.component';
import { HomePageComponent } from './home-page/home-page.component';
import {PrisonerComponent } from './prisoner/prisoner.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'complaint', component: ComplaintRegisterComponent },
  { path: 'police', component: PoliceDetailsComponent },
  { path: 'victim', component: VictimDetailsComponent },
  { path: 'fir', component: FIRComponent },
  { path: 'chargesheet', component: ChargeSheetComponent },
  { path: 'login', component: LoginModuleComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'prisoner', component: PrisonerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
