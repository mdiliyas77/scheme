import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memberdashboard',
  templateUrl: './memberdashboard.component.html',
  styleUrls: ['./memberdashboard.component.css']
})
export class MemberdashboardComponent implements OnInit {

  model:any={};

  constructor() { }

  ngOnInit(): void {
    this.model.memberid = sessionStorage.getItem('userid')
  }

}
