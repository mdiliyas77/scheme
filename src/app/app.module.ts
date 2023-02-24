import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
import { AddtypesComponent } from './addtypes/addtypes.component';
import { EditmemberComponent } from './editmember/editmember.component';
import { ViewqueryComponent } from './viewquery/viewquery.component';
import { RegistermemberComponent } from './registermember/registermember.component';
import { MemberheaderComponent } from './memberheader/memberheader.component';
import { MemberschemesComponent } from './memberschemes/memberschemes.component';
import { MatchingschemesComponent } from './matchingschemes/matchingschemes.component';
import { MyapplicationComponent } from './myapplication/myapplication.component';
import { AllapplicationsComponent } from './allapplications/allapplications.component';
import { ViewmyqueryComponent } from './viewmyquery/viewmyquery.component';
import { AddcasteComponent } from './addcaste/addcaste.component';
import { NgToastModule } from 'ng-angular-popup';

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
    ViewmembersComponent,
    AddtypesComponent,
    EditmemberComponent,
    ViewqueryComponent,
    RegistermemberComponent,
    MemberheaderComponent,
    MemberschemesComponent,
    MatchingschemesComponent,
    MyapplicationComponent,
    AllapplicationsComponent,
    ViewmyqueryComponent,
    AddcasteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
