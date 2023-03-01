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
  castelist: any = [];
  searchtext: string = "";

  isusertype: boolean = false;
  iscaste: boolean = false;
  ismaritialstatus: boolean = false;
  isschemetitle: boolean = false;
  isschemedesc: boolean = false;
  isage: boolean = false;
  isendge: boolean = false;
  isdocs: boolean = false;
  isgender: boolean = false;
  isshow: boolean = false;
  isstatus: boolean = false;


  mstatus: any = [
    { type: "all" },
    { type: "single" },
    { type: "married" },
    { type: "window" },
    { type: "divorced" },
  ]

  schemestatus: any = [
    { types: "running" },
    { types: "expired" },
  ]

  gender: any = [
    { types: "all" },
    { types: "male" },
    { types: "female" },
    { types: "transgender" },
  ]

  constructor(private schemeservice: SchemeService, private router: Router) { }

  ngOnInit(): void {
    this.GetType();
    this.GetCaste();
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

  GetCaste() {
    this.schemeservice.GetCaste()
      .subscribe({
        next: (data) => {
          this.castelist = data as any[];
        }
      })
  }

  OnSubmit() {
    debugger;

    if (this.model.usertype==undefined) {
      this.isusertype = true;
    }
    else if (this.model.caste==undefined) {
      this.iscaste = true;
    }
    else if (this.model.gender==undefined) {
      this.isgender = true;
    }
    else if (this.model.maritialstatus==undefined) {
      this.ismaritialstatus = true;
    }
    else if (this.model.startage=="0" || this.model.startage==undefined || this.model.startage=="" ) {
      this.isage = true;
    }
    else if (this.model.endage=="0" || this.model.endage==undefined || this.model.endage=="" ) {
      this.isendge = true;
    }
    else if (this.model.schemetitle==null || this.model.schemetitle==undefined || this.model.schemetitle=="" ) {
      this.isschemetitle = true;
    }
    else if (this.model.schemedesc==null || this.model.schemedesc==undefined || this.model.schemedesc=="") {
      this.isschemedesc = true;
    }
    else if (this.model.docs==null || this.model.docs==undefined || this.model.docs=="") {
      this.isdocs = true;
    }
    

    else{

      if (this.model.schemeid == null) {
        this.schemeservice.AddScheme(this.model)
          .subscribe({
            next: (data) => {
              data.Status == "Error" ? this.flag = false : this.flag = true;
              this.errormessage = data.Message;
              this.Clear();
              this.GetAllScheme();
              setTimeout(() => (this.errormessage = ""), 3000);
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
              setTimeout(() => (this.errormessage = ""), 3000);
            }
          })
      }
    }
  }

  Edit(slist: Scheme) {
    this.model = Object.assign({}, slist);
    this.isshow=true;
  }

  Delete(slist: Scheme) {
    if (confirm("Are you sure to delete it?")) {
      this.model = Object.assign({}, slist);
      this.schemeservice.DeleteScheme(this.model)
        .subscribe({
          next: (data) => {
            this.flag = false;
            this.errormessage = data.Message;
            this.Clear();
            this.GetAllScheme();
            setTimeout(() => (this.errormessage = ""), 3000);
          }
        })
    }
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
    this.model.age = null;
    this.model.schemetype = null;
    this.model.schemetitle = null;
    this.model.schemedesc = null;
    this.model.docs = null;
    this.model.caste = null;
    this.model.maritialstatus = null;
    this.model.schemeid = null;

  this.isusertype = false;
  this.iscaste = false;
  this.ismaritialstatus = false;
  this.isschemetitle = false;
  this.isschemedesc = false;
  this.isage = false;
  this.isdocs = false;
  this.isgender = false;
  }
}