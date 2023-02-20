import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-addscheme',
  templateUrl: './addscheme.component.html',
  styleUrls: ['./addscheme.component.css']
})
export class AddschemeComponent implements OnInit {

  usertypelist: any = [];
  model: any = {};
  flag: boolean = true;
  errormessage: string = "";
  allschemelist: any = [];
  searchtext:string="";
  constructor(private schemeservice: SchemeService, private router: Router) { }

  ngOnInit(): void {
    this.GetType();
    this.GetAllScheme();
  }

  GetType() {
    debugger;
    this.schemeservice.GetUserType()
      .subscribe({
        next: (data) => {
          this.usertypelist = data as any[];
        }
      })
  }

  OnSubmit() {
    if (this.model.schemeid == null) {
      this.schemeservice.AddScheme(this.model)
        .subscribe({
          next: (data) => {
            data.Status == "Error" ? this.flag = false : this.flag = true;
            this.errormessage = data.Message;
            this.Clear();
            this.GetAllScheme();
            setTimeout(() =>(this.errormessage =""),3000);
          }
        })
    }
    else {
      this.schemeservice.EditScheme(this.model)
        .subscribe({
          next: (data) => {
            data.Status == "Error" ? this.flag = false : this.flag = true;
            this.errormessage = data.Message;
            this.Clear();
            this.GetAllScheme();
            setTimeout(() =>(this.errormessage =""),3000);
          }
        })
    }
  }

  Edit(slist: Scheme) {
    this.model = Object.assign({}, slist);
  }

  Delete(slist: Scheme) {
    this.model = Object.assign({}, slist);
    this.schemeservice.DeleteScheme(this.model)
      .subscribe({
        next: (data) => {
          this.flag = false;
          this.errormessage = data.Message;
          this.Clear();
          this.GetAllScheme();
          setTimeout(() =>(this.errormessage =""),3000);
        }
      })
  }

  GetAllScheme() {
    this.schemeservice.GetAllSchemes()
      .subscribe({
        next: (data) => {
          this.allschemelist = data as any[];
        }
      })
  }

  Clear() {
    this.model.usertype = null;
    this.model.usertypeid = null;
    this.model.schemeid = null;
    this.model.schemetype = null;
    this.model.schemetitle = null;
    this.model.schemedesc = null;
  }
}