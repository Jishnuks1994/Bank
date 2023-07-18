import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent {

  constructor(private rout:Router){}

  homepage(){
    this.rout.navigateByUrl("homepage")
  }

}
