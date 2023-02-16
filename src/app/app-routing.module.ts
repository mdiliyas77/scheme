import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddschemeComponent } from './addscheme/addscheme.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AllschemesComponent } from './allschemes/allschemes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MemberdashboardComponent } from './memberdashboard/memberdashboard.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { MyschemesComponent } from './myschemes/myschemes.component';
import { ViewmembersComponent } from './viewmembers/viewmembers.component';

const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
