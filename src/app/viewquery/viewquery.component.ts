import { Component, OnInit } from '@angular/core';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-viewquery',
  templateUrl: './viewquery.component.html',
  styleUrls: ['./viewquery.component.css']
})
export class ViewqueryComponent implements OnInit {

  querylist: any = {};
  model: any = {};
  statusmsg: string = "";
  flag: boolean = true;
  hide: boolean = false;

  constructor(private schemeservice: SchemeService) { }

  ngOnInit(): void {
    this.getQuery();
  }

  Reply(qlist: Scheme) {
    debugger;
    this.model = Object.assign({}, qlist);
    this.hide = !this.hide;
  }

  GReply() {
    debugger;
    if (this.model.reply == null || this.model.reply == "") {
      this.hide = false;
    }
    else {
      this.schemeservice.GiveReply(this.model)
        .subscribe({
          next: (data) => {
            data.Status == "Success" ? this.flag = true : this.flag = false;
            this.statusmsg = data.Message;
            this.ClearAll();
            this.getQuery();
          }
        })
    }
  }

  getQuery() {
    debugger;
    this.schemeservice.GetAllQuery()
      .subscribe({
        next: (data) => {
          this.querylist = data as any[];
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
