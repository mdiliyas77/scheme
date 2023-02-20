import { Component, OnInit } from '@angular/core';
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

  constructor(private schemeservice:SchemeService) { }

  ngOnInit(): void {
    this.GetMember();
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

  Edit(mlist:Scheme)
  {
    this.model = Object.assign({},mlist)
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
}
