import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(public rout:Router){}

// statement(){
//   this.rout.navigateByUrl("statement")
// }

logout(){
  this.rout.navigateByUrl("")
}

}
