import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HomeServiceService {
  baseAPI:string = 'http://version1.api.memegenerator.net//Instance_Select?instanceID=';
  keyAPI:string ='&apiKey=9063d7e8-3299-413d-96f0-6114ce579295';
  randomNo:string;

  constructor(private http:HttpClient) { }

  getData(number:number){
    return this.http.get(this.baseAPI+number+this.keyAPI);
  }

}
