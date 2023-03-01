import { Component, OnInit } from '@angular/core';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';
import { ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-memberschemes',
  templateUrl: './memberschemes.component.html',
  styleUrls: ['./memberschemes.component.css']
})
export class MemberschemesComponent implements OnInit {

  searchtext: string = "";
  allschemelist: any = [];
  model: any = {};
  hide: boolean = false;

  @ViewChild('mySection')
  mySection!: ElementRef;


  constructor(private schemeservice: SchemeService) { }

  ngOnInit(): void {
    this.GetAllScheme();
  }

  GetAllScheme() {
    this.schemeservice.GetAllSchemes()
      .subscribe({
        next: (data) => {
          this.allschemelist = data as any[];
        }
      })
  }

  ShowData(slist: Scheme) {
    this.hide = !this.hide;
    this.model = Object.assign({}, slist);
    setTimeout(() => {
      this.mySection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    
    
    
  }

  SubmitQuery() {
    debugger;
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
