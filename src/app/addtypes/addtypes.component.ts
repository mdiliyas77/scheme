import { Component, OnInit } from '@angular/core';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-addtypes',
  templateUrl: './addtypes.component.html',
  styleUrls: ['./addtypes.component.css']
})
export class AddtypesComponent implements OnInit {

  model:any={};
  flag:boolean=true;
  statusmsg:string="";
  schemes:any=[];
  constructor(private schemeservice:SchemeService) { }

  ngOnInit(): void {
    this.GetSchemeTypes();
  }

  Submit()
  {
    debugger;
    if (this.model.usertypeid==null)
    {
    this.schemeservice.AddTypes(this.model)
    .subscribe({
      next:(data)=>
      {
        data.Status=="Error"?this.flag=false:this.flag=true;
        this.statusmsg = data.Message;
        this.Clear();
        this.GetSchemeTypes();
        setTimeout(() =>(this.statusmsg =""),3000);
      }
    })
  }
  else
  {
    this.schemeservice.EditSchemeType(this.model)
    .subscribe({
      next:(data)=>
      {
        this.statusmsg = data.Message;
        this.Clear();
        this.GetSchemeTypes();
        setTimeout(() =>(this.statusmsg =""),3000);
      }
    })
  }

  }

  Edit(type:Scheme)
  {
    this.model = Object.assign({},type);
  }

  Delete(type:Scheme)
  {
    this.model = Object.assign({},type);
    this.schemeservice.DeleteSchemeType(this.model)
    .subscribe({
      next:(data)=>
      {
        this.flag= false;
        this.statusmsg = data.Message;
        this.Clear();
        this.GetSchemeTypes();
        setTimeout(() =>(this.statusmsg =""),3000);
      }
    })
  }

  GetSchemeTypes()
  {
    this.schemeservice.GetUserType()
    .subscribe({
      next:(data)=>{
        this.schemes = data as any[];
      }
    })
  }

  Clear()
  {
    this.model.usertypeid=null;
    this.model.usertype=null;
  }

}
