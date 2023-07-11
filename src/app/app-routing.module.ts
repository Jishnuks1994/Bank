import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'statement',component:StatementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
