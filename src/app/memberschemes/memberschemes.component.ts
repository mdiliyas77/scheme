import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-memberschemes',
  templateUrl: './memberschemes.component.html',
  styleUrls: ['./memberschemes.component.css']
})
export class MemberschemesComponent implements OnInit {

  searchtext:string="";
  allschemelist:any=[];

  constructor(private schemeservice:SchemeService) { }

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

}
