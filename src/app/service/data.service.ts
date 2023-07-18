import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sData="Welcome to our Baning Services"

  constructor() { }

  accessData(data:any){
    console.log(data);
    
  }
}
