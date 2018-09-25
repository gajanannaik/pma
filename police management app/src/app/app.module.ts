import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComplaintRegisterComponent } from './complaint-register/complaint-register.component';
 
import { PoliceDetailsComponent } from './police-details/police-details.component';
import { VictimDetailsComponent } from './victim-details/victim-details.component';
import { FIRComponent } from './fir/fir.component';
import { PrisonerComponent } from './prisoner/prisoner.component';
import { ChargeSheetComponent } from './charge-sheet/charge-sheet.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintRegisterComponent,
  
    PoliceDetailsComponent,
    VictimDetailsComponent,
    FIRComponent,
    PrisonerComponent,
    ChargeSheetComponent,
    LoginModuleComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
