import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-allschemes',
  templateUrl: './allschemes.component.html',
  styleUrls: ['./allschemes.component.css']
})
export class AllschemesComponent implements OnInit {

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
