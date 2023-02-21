import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-viewmembers',
  templateUrl: './viewmembers.component.html',
  styleUrls: ['./viewmembers.component.css']
})
export class ViewmembersComponent implements OnInit {

  model:any={};
  memberlist:any=[];
  statusmsg:string="";
  flag:boolean=false;
  hide:boolean=false;
  usertypelist: any = [];

  constructor(private schemeservice:SchemeService,private router:Router) { }

  ngOnInit(): void {
    this.GetMember();
    this.GetType();
  }

  GetMember()
  {
    this.schemeservice.GetMembers()
    .subscribe({
      next:(data)=>
      {
        this.memberlist = data as any[];
      }
    })
  }

  Showdata(mlist:Scheme)
  {
    debugger;
    this.model = Object.assign({},mlist);
    this.hide =!this.hide;
    
  }

  Delete(mlist:Scheme)
  {
    this.model = Object.assign({},mlist)
    this.schemeservice.DeleteMember(this.model)
    .subscribe({
      next:(data)=>
    {
      this.statusmsg = data.Message;
      this.ClearAll();
      this.GetMember();
    }
    })
  }

  ClearAll()
  {
    this.model.memberid="";
    this.model.name="";
    this.model.usertype="";
    this.model.usertypeid="";
    this.model.password="";
    this.model.aadhaarno="";
    this.model.phoneno="";
    this.model.address="";
  }

  GetType() {
    debugger;
    this.schemeservice.GetUserType()
      .subscribe({
        next: (data) => {
          this.usertypelist = data as any[];
        }
      })
  }

  Edit() {
    debugger;
    this.schemeservice.EditMember(this.model)
    .subscribe({
      next:(data)=>
      {
        data.Status=="Success"?this.flag=true:this.flag=false;
        this.statusmsg = data.Message;
        this.hide=false;
        this.ClearAll();
        this.GetMember();
        setTimeout(()=>{this.statusmsg=""},3000)
      }
    })
  }
}
