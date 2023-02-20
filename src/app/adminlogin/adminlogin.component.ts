import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  model:any={};
  statusmsg:string="";
  flag:boolean=true;

  constructor(private schemeservice:SchemeService, private router:Router) { }

  ngOnInit(): void {
  }

  Login()
  {
    debugger;
    this.model.usertype="admin"
    sessionStorage.setItem('userid','this.model.userid');
    this.schemeservice.Login(this.model)
    .subscribe({
      next:(data)=>
      {
        if(data.Status=="Success")
        {
          this.router.navigate(['/admindashboard']);
          setTimeout(()=> {alert("Logged In Successfully")},300);
        }
        else
        {
          data.Status=="Error"?this.flag=false:this.flag=true;
          this.statusmsg = data.Message;
        }
      }
    })
  }
}
