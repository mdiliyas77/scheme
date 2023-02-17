import { Component, OnInit } from '@angular/core';
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
  constructor(private schemeservice:SchemeService) { }

  ngOnInit(): void {
  }

  Submit()
  {
    debugger;
    this.schemeservice.AddTypes(this.model)
    .subscribe({
      next:(data)=>
      {
        data.Status=="Error"?this.flag=false:this.flag=true;
        this.statusmsg = data.Message;
        this.model.usertype="";
      }
    })

  }

}
