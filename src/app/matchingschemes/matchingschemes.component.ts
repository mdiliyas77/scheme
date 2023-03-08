import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Scheme } from '../scheme';
import { SchemeService } from '../scheme.service';
import { ViewChild, ElementRef } from '@angular/core';

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
  hide: boolean = false;
  show: boolean = false;
  noscheme: boolean = false;


  @ViewChild('mySection')
  mySection!: ElementRef;

  constructor(private schemeservice: SchemeService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.GetMemberById();
    this.GetMyScheme();
  }

  GetMemberById() {
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
          debugger;
          this.myschemelist = data as any[];
          if(this.myschemelist.length==0)
          {
            this.noscheme=true;
          }
        }
      })
  }
  Apply(slist: Scheme) {
    debugger;
    if (confirm("Are you sure?")) {
      this.model = Object.assign({}, slist);
      if(this.model.status=="running")
      {
      this.model.memberid = sessionStorage.getItem('userid');
      this.schemeservice.Apply(this.model)
        .subscribe({
          next: (data) => {
            if (data.Status == "Success") {
              alert("Your Application Number is: " + data.Message);
            }
            else if (data.Status == "Exist") {
              this.toast.warning({detail:data.Status,summary:data.Message})
            }
            else {
              this.toast.error({detail:data.Status,summary:data.Message,duration:3000});
            }

            this.ClearAll()
          }
        })
      }
      else
      {
        this.toast.error({detail:"Error",summary:"Scheme Expried!!!!",duration:3000})
      }

    }

  }

  ShowData(slist: Scheme) {
    this.hide = !this.hide;
    this.model = Object.assign({},slist);
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

  public expiredscheme(section: string) {
    this.show=!this.show;
    window.location.hash = '';
    window.location.hash = section;

}
}

