import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-memberlogin',
  templateUrl: './memberlogin.component.html',
  styleUrls: ['./memberlogin.component.css']
})
export class MemberloginComponent implements OnInit {

  model: any = {};

  constructor(private service: SchemeService, private router: Router) { }

  ngOnInit(): void {
  }

  Signin() {
    debugger;
    this.service.memberlogin(this.model)
      .subscribe({
        next: (data) => {
          if (data.Status == "Error") 
          {
            alert("Check ID and Password");
          }

          else 
          {
            this.router.navigate(['/memberdashboard']);
            setTimeout(() => { alert("Logged In Successfully") }, 300);
          }
        }
      })

  }
}
