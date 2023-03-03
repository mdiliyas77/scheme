import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-viewquery',
  templateUrl: './viewquery.component.html',
  styleUrls: ['./viewquery.component.css']
})
export class ViewqueryComponent implements OnInit {

  @ViewChild('mySection')
  mySection!: ElementRef;
  
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
    setTimeout(() => {
      this.mySection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  GReply() {
    debugger;
    if (this.model.reply == null || this.model.reply == "") {
      this.hide = false;
      alert("Error!! Reply can't be empty")
    }
    else {
      this.schemeservice.GiveReply(this.model)
        .subscribe({
          next: (data) => {
            alert(data.Message);
            this.hide = false;
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
