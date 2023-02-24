import { Component, OnInit } from '@angular/core';
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
  constructor(private schemeservice:SchemeService) { }

  ngOnInit(): void {
    this.getQuery();
  } 

  getQuery() {
    debugger;
    this.schemeservice.GetAllQuery()
      .subscribe({
        next: (data) => {
          this.querylist = data as any[];

          this.myquerylist = this.querylist.find((myname)=>myname.memberid===sessionStorage.getItem('userid'));
          this.model.name = this.myquerylist["name"];
          
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


}
