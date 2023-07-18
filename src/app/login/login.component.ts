import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent implements OnInit{
  acno:any=""
  pData="Enter Account Number"
  serviceData:any=""
  constructor(private rout:Router,private ds:DataService){}
  ngOnInit(): void {
    this.serviceData=this.ds.sData;
    
  }


  login(){

    this.ds.accessData('hello')

    this.rout.navigateByUrl("homepage")
  }

}
