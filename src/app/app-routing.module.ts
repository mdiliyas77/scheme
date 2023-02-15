import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { MemberdashboardComponent } from './memberdashboard/memberdashboard.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'memberlogin',component:MemberloginComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'memberdashboard',component:MemberdashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
