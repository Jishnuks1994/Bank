import { Component } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent {

  data="Happy Banking with us..."
  pdata="Enter Username"

  acno:any=""
  psw:any=""

  login(){
  console.log(this.acno);
  console.log(this.psw);
       
  }

}
