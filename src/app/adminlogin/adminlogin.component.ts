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
  validuserid:boolean=false;
  validpass:boolean=false;

  constructor(private schemeservice:SchemeService, private router:Router) { }

  ngOnInit(): void {
  }

  OnChange()
  {
    debugger;
    if(this.model.userid.length>0 )
    {
      this.validuserid= false;
    }
    if (this.model.password.length>0)
    {
      this.validpass= false;
    }
  }

  Login()
  {
    if(this.model.userid==null || this.model.userid=="")
    {
      this.validuserid=true;
      if(this.model.password==null || this.model.password=="")
      {
        this.validpass=true;
      }
    }
    else if(this.model.password==null || this.model.password=="")
    {
      this.validpass=true;
      this.validuserid=false;
    }
    else
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
}
