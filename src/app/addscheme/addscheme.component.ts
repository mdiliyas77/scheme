import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-addscheme',
  templateUrl: './addscheme.component.html',
  styleUrls: ['./addscheme.component.css']
})
export class AddschemeComponent implements OnInit {

  usertypelist:any=[];
  model:any={};
  flag:boolean=true;
  errormessage:string="";

  constructor(private schemeservice:SchemeService, private router:Router) { }

  ngOnInit(): void {
    this.GetType();
  }

  GetType()
  {
    debugger;
    this.schemeservice.GetUserType()
    .subscribe({
      next:(data)=>
      {
        this.usertypelist = data as any[];
      }
    })
  }

  OnSubmit()
  {
    
  }
}
