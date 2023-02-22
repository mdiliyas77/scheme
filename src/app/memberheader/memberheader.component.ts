import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-memberheader',
  templateUrl: './memberheader.component.html',
  styleUrls: ['./memberheader.component.css']
})
export class MemberheaderComponent implements OnInit {

  model:any={};

  constructor(private router:Router, private service:SchemeService) { }

  ngOnInit(): void {
    
    this.model.memberid =  sessionStorage.getItem('userid');

  }

  logout()
  {
    sessionStorage.removeItem('userid');
    this.model.memberid="";
    this.router.navigate([''])
  }
}
