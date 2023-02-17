import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  model:any={};

  constructor(private schemeservice:SchemeService, private router:Router) { }

  ngOnInit(): void {
    
    this.model.userid=sessionStorage.getItem('userid');
  }

  logout()
  {
    debugger;
    this.model.userid=null;
    sessionStorage.removeItem('userid');
    this.router.navigate([""])
  }
}
