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
  flag: boolean = true;
  statusmsg: string = "";
  castelist: any = [];

  mstatus: any = [
    { type: "single" },
    { type: "married" },
    { type: "window" },
    { type: "divorced" },
  ]

  gender: any = [
    { types: "male" },
    { types: "female" },
    { types: "transgender" },
  ]

  isusertype: boolean = false;
  iscaste: boolean = false;
  ismaritialstatus: boolean = false;
  isname: boolean = false;
  isaddress: boolean = false;
  isage: boolean = false;
  isaadhaar: boolean = false;
  isgender: boolean = false;
  isphone: boolean = false;

  constructor(private service: SchemeService, private router: Router) { }

  ngOnInit(): void {
    this.GetType();
    this.GetCaste();
  }

  changeid() {
    debugger;
    if (this.model.userid.length > 0) {
      this.validid = false;
    }
    if (this.model.password.length > 0) {
      this.validpass = false;
    }
  }
  Signin() {
    debugger;
    if (this.model.userid == undefined || this.model.userid == "") {
      this.validid = true;
      if (this.model.password == undefined || this.model.password == "") {
        this.validpass = true;
      }
    }
    else if (this.model.password == undefined || this.model.password == "") {
      this.validpass = true;
    }
    else {
      this.model.usertype = "member";
      sessionStorage.setItem("userid", this.model.userid);
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

  GetCaste() {
    this.service.GetCaste()
      .subscribe({
        next: (data) => {
          this.castelist = data as any[];
          this.castelist = this.castelist.filter(obj => obj.caste != 'all');
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
          //Removing usert typr 'all' type user from the list
          this.usertypelist = this.usertypelist.filter(obj => obj.usertype != 'all');
        }
      })
  }

  MemberRegister() {

    if (this.model.name == null || this.model.name == undefined || this.model.name == "") {
      this.isname = true;
    }
    else if (this.model.age == "0" || this.model.age == undefined || this.model.age == "") {
      this.isage = true;
    }
    else if (this.model.address == null || this.model.address == undefined || this.model.address == "") {
      this.isaddress = true;
    }
    else if (this.model.aadhaarno == null || this.model.aadhaarno == undefined || this.model.aadhaarno == "") {
      this.isaadhaar = true;
    }
    else if (this.model.phoneno == null || this.model.phoneno == undefined || this.model.phoneno == "") {
      this.isphone = true;
    }
    else if (this.model.caste == undefined) {
      this.iscaste = true;
    }
    else if (this.model.gender == undefined) {
      this.isgender = true;
    }
    else if (this.model.maritialstatus == undefined) {
      this.ismaritialstatus = true;
    }
    else if (this.model.usertype == undefined) {
      this.isusertype = true;
    }
    
    else {

      debugger;
      this.service.RegisterMember(this.model)
        .subscribe({
          next: (data) => {
            data.Status == "Success" ? this.flag = true : this.flag = false;
            this.statusmsg = data.Message;
            this.ClearAll();
          }
        })
    }
  }

  ClearAll() {
    this.model.name = ""
    this.model.address = ""
    this.model.aadhaarno = ""
    this.model.phoneno = ""
    this.model.usertypeid = ""
    this.model.usertype = ""
    this.model.age = ""
    this.model.caste = ""
    this.model.maritialstatus = ""
    this.model.gender = ""

    this.isusertype = false;
    this.iscaste = false;
    this.ismaritialstatus = false;
    this.isname = false;
    this.isaddress = false;
    this.isage = false;
    this.isaadhaar = false;
    this.isgender = false;
    this.isphone = false;

  }
}
