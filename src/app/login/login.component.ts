import { Component } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent {

  constructor(private rout:Router){}

  data="Happy Banking with us..."
  pdata="Enter Username"

  acno:any=""
  psw:any=""

  login(){
    this.rout.navigateByUrl("homepage")
  }

}
