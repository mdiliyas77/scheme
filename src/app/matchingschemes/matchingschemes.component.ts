import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-matchingschemes',
  templateUrl: './matchingschemes.component.html',
  styleUrls: ['./matchingschemes.component.css']
})
export class MatchingschemesComponent implements OnInit {

  searchtext:string="";
  myschemelist:any=[];
  memberlist:any=[];
  model:any={};
  statusmsg:string=""
  flag:boolean=true;
  hide:boolean=true;

  constructor(private schemeservice:SchemeService) { }

  ngOnInit(): void {
    this.GetMemberById();
    this.GetMyScheme();
  }

  GetMemberById()
  {
    debugger;
    this.model.memberid = sessionStorage.getItem('userid');
    this.schemeservice.GetMemberbyId(this.model)
      .subscribe({
        next: (data) => {
          this.memberlist = data as any[];
        }
      })
  }

  GetMyScheme() {
    this.model.memberid = sessionStorage.getItem('userid');
    this.schemeservice.GetMyScheme(this.model)
      .subscribe({
        next: (data) => {
          this.myschemelist = data as any[];
        }
      })
}
Edit()
{

}

}
