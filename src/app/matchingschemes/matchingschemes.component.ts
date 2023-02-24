import { Component, OnInit } from '@angular/core';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-matchingschemes',
  templateUrl: './matchingschemes.component.html',
  styleUrls: ['./matchingschemes.component.css']
})
export class MatchingschemesComponent implements OnInit {

  searchtext: string = "";
  myschemelist: any = [];
  memberlist: any = [];
  model: any = {};
  statusmsg: string = ""
  flag: boolean = true;
  hide: boolean = true;

  constructor(private schemeservice: SchemeService) { }

  ngOnInit(): void {
    this.GetMemberById();
    this.GetMyScheme();
  }

  GetMemberById() {
    debugger;
    this.model.memberid = sessionStorage.getItem('userid');
    this.schemeservice.GetMemberbyId(this.model)
      .subscribe({
        next: (data) => {
          this.memberlist = data as any[];
        }
      })
  }

  GetMyScheme() {
    this.model.memberid = sessionStorage.getItem('userid');
    this.schemeservice.GetMyScheme(this.model)
      .subscribe({
        next: (data) => {
          this.myschemelist = data as any[];
        }
      })
  }
  Apply(slist: Scheme) {
    if (confirm("Are you sure?")) {
      this.model = Object.assign({}, slist);
      this.model.memberid = sessionStorage.getItem('userid');
      this.schemeservice.Apply(this.model)
        .subscribe({
          next: (data) => {
            if (data.Status == "Success") {
              alert("Your Application Number is: " + data.Message);
            }
            else if (data.Status == "Exist") {
              alert(data.Message);
            }
            else {
              alert(data.Message);
            }

            this.ClearAll()
          }
        })

    }

  }

  ShowData(slist: Scheme) {
    this.hide = !this.hide;
  }

  SubmitQuery() {
    if (confirm("Are you sure?")) {
      this.model.memberid = sessionStorage.getItem('userid');
      this.schemeservice.AddQuery(this.model)
        .subscribe({
          next: (data) => {
            if (data.Status == "Success") {
              alert("Your Query ID is : " + data.Message);
            }
            else if (data.Status == "Exist") {
              alert(data.Message);
            }
            else {
              alert(data.Message);
            }

            this.ClearAll();
          }
        })
    }
  }
  ClearAll() {
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
    this.model.query = null;
  }
}

