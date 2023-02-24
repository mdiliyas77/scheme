import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-memberlogin',
  templateUrl: './memberlogin.component.html',
  styleUrls: ['./memberlogin.component.css']
})
export class MemberloginComponent implements OnInit {

  model: any = {};
  login: boolean = true;
  signup: boolean = false;
  validid: boolean = false;
  validpass: boolean = false;
  usertypelist: any = [];
  flag:boolean=true;
  statusmsg:string="";
  castelist: any = [];

  mstatus:any=[
    {type:"single"},
    {type:"married"},
    {type:"window"},
    {type:"divorced"},
  ]

  constructor(private service: SchemeService, private router: Router) { }

  ngOnInit(): void {
    this.GetType();
    this.GetCaste();
  }

  changeid()
  {
    debugger;
    if(this.model.userid.length>0 )
    {
      this.validid= false;
    }
    if (this.model.password.length>0)
    {
      this.validpass= false;
    }
  }
  Signin() {
    debugger;
    if (this.model.userid == undefined || this.model.userid =="") 
    {
      this.validid = true;
      if(this.model.password == undefined || this.model.password =="")
      {
        this.validpass = true;
      }
    }
    else if (this.model.password == undefined || this.model.password =="") 
    {
      this.validpass = true;
    }
    else {
      this.model.usertype="member";
      sessionStorage.setItem("userid",this.model.userid);
      this.service.Login(this.model)
        .subscribe({
          next: (data) => {
            if (data.Status == "Error") {
              alert("Check ID and Password");
            }

            else {
              this.router.navigate(['/memberdashboard']);
              this.model.memberlist = sessionStorage.getItem("userid");
              setTimeout(() => { alert("Logged In Successfully") }, 300);
            }
          }
        })
    }
  }

  GetCaste()
  {
    this.service.GetCaste()
    .subscribe({
      next:(data)=>{
        this.castelist = data as any[];
      }
    })
  }

  Register() {
    debugger;
    this.signup = !this.signup;
    this.login = !this.login;
  }

  GetType() {
    debugger;
    this.service.GetUserType()
      .subscribe({
        next: (data) => {
          this.usertypelist = data as any[];
        }
      })
  }

  MemberRegister()
      {
        debugger;
        this.service.RegisterMember(this.model)
        .subscribe({
          next:(data)=>
          {
            data.Status=="Success"?this.flag=true:this.flag=false;
            this.statusmsg = data.Message;
            this.ClearAll();
          }
        })
        
      }

      ClearAll()
      {
        this.model.name=""
        this.model.address=""
        this.model.aadhaarno=""
        this.model.phoneno=""
        this.model.usertypeid=""
        this.model.usertype=""
        this.model.age=""
        this.model.caste=""
        this.model.maritialstatus=""

      }
}
