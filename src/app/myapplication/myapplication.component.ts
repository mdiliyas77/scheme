import { Component, OnInit, ViewChild } from '@angular/core';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-myapplication',
  templateUrl: './myapplication.component.html',
  styleUrls: ['./myapplication.component.css']
})
export class MyapplicationComponent implements OnInit {

  @ViewChild('fileInput') fileInput: any;
  
  applist: any = [];
  model: any = {};
  myFile: string[] = [];

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

  getFile(e) {
    debugger;
    // console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFile.push(e.target.files[i]);

    }
  }

  Delete(list: Scheme) {
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

  UploadFile(list:Scheme)
  {
    this.model = Object.assign({},list);
    debugger;
    
    const frmData = new FormData();
    for (var i = 0; i < this.myFile.length; i++) {
      frmData.append("fileUpload", this.myFile[i]);
    }
    frmData.append('applicationid', this.model.applicationid);
    frmData.append('filetype', 'image');

    debugger;
    this.service.UploadFile(frmData)
      .subscribe({
        next: (data) => {
          alert(data)
          this.myFile = [];
          this.fileInput.nativeElement.value = '';
        }
      });
  }

}
