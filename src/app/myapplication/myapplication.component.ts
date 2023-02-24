import { Component, OnInit } from '@angular/core';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-myapplication',
  templateUrl: './myapplication.component.html',
  styleUrls: ['./myapplication.component.css']
})
export class MyapplicationComponent implements OnInit {

  applist: any = [];
  model: any = {};

  constructor(private service: SchemeService) { }

  ngOnInit(): void {
    this.GetAllApp();
  }

  GetAllApp() {
    this.service.GetAllApplication()
      .subscribe({
        next: (data) => {
          this.applist = data as any[];
        }
      })
  }

  Approve(list: Scheme) {
    if (confirm("Are you sure?")) {
      this.model = Object.assign({}, list);
      if (this.model.appstatus == "pending") {
        this.model.condition = "delete";
        this.service.AppAction(this.model)
          .subscribe({
            next: (data) => {
              this.GetAllApp();
              this.Clear();
              alert(data.Message);
            }
          })
      }
      else if (this.model.appstatus == "approved") {
        alert("Can't Delete, Application Already Approved");
      }
      else {
        alert("Can't Delete, Application Already Rejected");
      }
    }
  }

  Clear() {
    this.model.applicationid = "";
    this.model.schemeid = "";
    this.model.memberid = "";
    this.model.schemetitle = "";
    this.model.name = "";
    this.model.appstatus = "";
    this.model.condition = "";
  }

}
