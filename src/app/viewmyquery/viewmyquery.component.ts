import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-viewmyquery',
  templateUrl: './viewmyquery.component.html',
  styleUrls: ['./viewmyquery.component.css']
})
export class ViewmyqueryComponent implements OnInit {

  querylist: any = [];
  myquerylist: any = [];
  sortedarray: any = [];
  model: any = {};
  constructor(private schemeservice:SchemeService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.getQuery();
  } 

  getQuery() {
    debugger;
    this.schemeservice.GetAllQuery()
      .subscribe({
        next: (data) => {
          this.querylist = data as any[];

          this.myquerylist = this.querylist.filter((myname)=>myname.memberid===sessionStorage.getItem('userid'));
          
        }
      })
  }

  ClearAll()
  {
    this.model.queryid="";
    this.model.reply="";
    this.model.memberid="";
    this.model.name="";
    this.model.schemeid="";
    this.model.schemetitle="";
    this.model.query="";
  }

  Delete(qlist:Scheme)
  {
    if(confirm("Are You Sure?"))
    {
      this.model = Object.assign({},qlist);
      if(this.model.reply==null || this.model.reply=="")
      {
        this.schemeservice.DeleteQuery(this.model)
        .subscribe({
          next:(data)=>
          {
            this.toast.success({detail:"Success",summary:data.Message,duration:5000});
            this.ClearAll();
            this.getQuery();
          }
        })
      }
      else
      {
        this.toast.error({detail:"Error",summary:"Can't Delete!!, Query Already Got Reply",duration:5000});

      }
    }
  }


}
