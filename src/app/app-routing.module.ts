import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddcasteComponent } from './addcaste/addcaste.component';
import { AddschemeComponent } from './addscheme/addscheme.component';
import { AddtypesComponent } from './addtypes/addtypes.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AllapplicationsComponent } from './allapplications/allapplications.component';
import { AllschemesComponent } from './allschemes/allschemes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditmemberComponent } from './editmember/editmember.component';
import { HomeComponent } from './home/home.component';
import { MatchingschemesComponent } from './matchingschemes/matchingschemes.component';
import { MemberdashboardComponent } from './memberdashboard/memberdashboard.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { MemberschemesComponent } from './memberschemes/memberschemes.component';
import { MyapplicationComponent } from './myapplication/myapplication.component';
import { MyschemesComponent } from './myschemes/myschemes.component';
import { RegistermemberComponent } from './registermember/registermember.component';
import { ViewmembersComponent } from './viewmembers/viewmembers.component';
import { ViewmyqueryComponent } from './viewmyquery/viewmyquery.component';
import { ViewqueryComponent } from './viewquery/viewquery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'memberlogin', component: MemberloginComponent,
children:[
  {path:'registermember',component:RegistermemberComponent}
]
},
  { path: 'admindashboard', component: AdmindashboardComponent,
  children:[
    { path: 'addtypes', component: AddtypesComponent },
    {path:'addscheme',component:AddschemeComponent},
    {path:'viewallquery',component:ViewqueryComponent},
    {path:'allapplications',component:AllapplicationsComponent},
    {path:'addcaste',component:AddcasteComponent},
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
      { path: 'memberschemes', component: MemberschemesComponent },
      { path: 'matchingschemes', component: MatchingschemesComponent },
      { path: 'myapplication', component: MyapplicationComponent },
      { path: 'myquery', component: ViewmyqueryComponent },
    ]
  },
  { path: 'allschemes', component: AllschemesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path:'registermember',component:RegistermemberComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
