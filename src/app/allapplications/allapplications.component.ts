import { Component, OnInit } from '@angular/core';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-allapplications',
  templateUrl: './allapplications.component.html',
  styleUrls: ['./allapplications.component.css']
})
export class AllapplicationsComponent implements OnInit {

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
        this.model.condition = "approve";
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
        alert("Application Already Approved");
      }
      else {
        alert("Can't Approve, Application Already Rejected");
      }
    }
  }

  Reject(list: Scheme) {
    if (confirm("Are you sure?")) {
      this.model = Object.assign({}, list)
      if (this.model.appstatus == "pending") {
        this.model.condition = "reject";
        this.service.AppAction(this.model)
          .subscribe({
            next: (data) => {
              this.GetAllApp();
              this.Clear();
              alert(data.Message);
            }
          })
      }
      else if (this.model.appstatus == "rejected") {
        alert("Application Already Rejected");
      }
      else {
        alert("Can't Reject, Application Already Approved");
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


  DownloadDocs(list: Scheme) {
    debugger;
    this.model = Object.assign({}, list)
    this.model.filetype="image";

    this.service.DownloadFile(this.model)
      .subscribe({
        next: (data) => {
          this.model.id = null;
          const byteCharacters = atob(data.base64String);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'image/jpeg/png/application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = data.name;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          // Release the object URL to free up memory.
          window.URL.revokeObjectURL(url);
        }
      });
  }
}
