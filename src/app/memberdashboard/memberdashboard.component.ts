import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../scheme.service';
@Component({
  selector: 'app-memberdashboard',
  templateUrl: './memberdashboard.component.html',
  styleUrls: ['./memberdashboard.component.css']
})
export class MemberdashboardComponent implements OnInit {

  model:any={};
  memberlist:any=[];
  list:any=[];
  membername:string="";

  constructor(private service:SchemeService) { }

  ngOnInit(): void {
    this.model.memberid = sessionStorage.getItem('userid')
    this.service.GetMemberbyId(this.model)
    .subscribe({
      next:(data)=>
      {
        this.memberlist=data as any[];
        this.list = this.memberlist.find((member)=>member.memberid===this.model.memberid)
        this.membername = this.list["name"]
      }
    })
  }

}
