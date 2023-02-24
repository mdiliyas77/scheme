import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup/public-api';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-addcaste',
  templateUrl: './addcaste.component.html',
  styleUrls: ['./addcaste.component.css']
})
export class AddcasteComponent implements OnInit {

  model:any={};
  flag:boolean=true;
  statusmsg:string="";
  castes:any=[];
  constructor(private schemeservice:SchemeService) { }
  //private toast:NgToastService <---- Inject this to use toaster

  ngOnInit(): void {
    this.GetCaste();
  }

  Submit()
  {
    debugger;
    if (this.model.casteid==null)
    {
    this.schemeservice.AddCaste(this.model)
    .subscribe({
      next:(data)=>
      {
        data.Status=="Error"?this.flag=false:this.flag=true;
        this.statusmsg = data.Message;
        this.Clear();
        this.GetCaste();
        setTimeout(() =>(this.statusmsg =""),3000);
      }
    })
  }
  else
  {
    this.schemeservice.EditCaste(this.model)
    .subscribe({
      next:(data)=>
      {
        this.statusmsg = data.Message;
        this.Clear();
        this.GetCaste();
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
    if(confirm("Are you sure to Delete it?"))
    {
    this.model = Object.assign({},type);
    this.schemeservice.DeleteCaste(this.model)
    .subscribe({
      next:(data)=>
      {
        this.flag= false;
        this.statusmsg = data.Message;
        // this.toast.success({detail:"Success",summary:data.Message,duration:5000});
        this.Clear();
        this.GetCaste();
        setTimeout(() =>(this.statusmsg =""),3000);
      }
    })
  }
  }

  GetCaste()
  {
    this.schemeservice.GetCaste()
    .subscribe({
      next:(data)=>{
        this.castes = data as any[];
      }
    })
  }

  Clear()
  {
    this.model.casteid=null;
    this.model.caste=null;
  }
}
