import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { MemberdashboardComponent } from './memberdashboard/memberdashboard.component';
import { AllschemesComponent } from './allschemes/allschemes.component';
import { MyschemesComponent } from './myschemes/myschemes.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AddschemeComponent } from './addscheme/addscheme.component';
import { ViewmembersComponent } from './viewmembers/viewmembers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    MemberloginComponent,
    MemberdashboardComponent,
    AllschemesComponent,
    MyschemesComponent,
    AboutusComponent,
    ContactusComponent,
    AppheaderComponent,
    AddschemeComponent,
    ViewmembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
