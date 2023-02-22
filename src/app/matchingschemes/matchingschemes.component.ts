import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-matchingschemes',
  templateUrl: './matchingschemes.component.html',
  styleUrls: ['./matchingschemes.component.css']
})
export class MatchingschemesComponent implements OnInit {

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
