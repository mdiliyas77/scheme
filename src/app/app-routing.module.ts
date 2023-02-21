import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddschemeComponent } from './addscheme/addscheme.component';
import { AddtypesComponent } from './addtypes/addtypes.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AllschemesComponent } from './allschemes/allschemes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditmemberComponent } from './editmember/editmember.component';
import { HomeComponent } from './home/home.component';
import { MemberdashboardComponent } from './memberdashboard/memberdashboard.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { MyschemesComponent } from './myschemes/myschemes.component';
import { ViewmembersComponent } from './viewmembers/viewmembers.component';
import { ViewqueryComponent } from './viewquery/viewquery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'memberlogin', component: MemberloginComponent },
  { path: 'admindashboard', component: AdmindashboardComponent,
  children:[
    { path: 'addtypes', component: AddtypesComponent },
    {path:'addscheme',component:AddschemeComponent},
    {path:'viewquery',component:ViewqueryComponent},
    {path:'viewmembers',component:ViewmembersComponent,
  children:[
    {path:'editmember',component:EditmemberComponent}
  ]
},
  ]
},
  { path: 'memberdashboard', component: MemberdashboardComponent,
    children: [
      { path: 'myschemes', component: MyschemesComponent },
      { path: 'allschemes', component: AllschemesComponent },
    ]
  },
  { path: 'allschemes', component: AllschemesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
