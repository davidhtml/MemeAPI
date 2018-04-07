import { Component, OnInit } from '@angular/core';
import {HomeServiceService} from './home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomNr:number;
  image: string;
  errorNo: any;
  klaida: number = 0;
  teisingas: number = 0;
  displayName:string;
  constructor(private hS:HomeServiceService) { }

  ngOnInit() {
    this.randomNr =   Math.floor((Math.random() * 1000) + 1);
    this.memeGenerator();
  }
  memeGenerator(){
      this.hS.getData(this.randomNr).subscribe(
        (response) => {
          this.errorNo = response['success'];
            if(this.errorNo === false){
              this.klaida++;
            } else {
              this.teisingas++;
              this.image = response['result'].imageUrl;
              this.displayName = response['result'].displayName;
            }
        }
      )
  }
  prevPicture() {
    this.randomNr--;
    this.image = '';
    this.memeGenerator();
      // GENERATING random number again and looping through array to minus one
      // if (this.noArr.length > 1 ){
      //   for (let i = 0; i <= this.noArr.length-1; i++){
      //     this.randomNr = this.noArr[i-1];
      //     }
      //   } else {
      //   this.randomNr = Math.floor((Math.random() * 1000) + 1);
      //   };
}
  nextPicture() {
    this.randomNr++;
      this.image = '';
      this.memeGenerator();
    // GENERATING random number again and pushing NUMBERS to array
    // this.randomNr =   Math.floor((Math.random() * 1000) + 1);
    // this.noArr.push(this.randomNr);
 }
 onReset(){
   this.klaida = 0;
   this.teisingas = 0;
   this.randomNr =   Math.floor((Math.random() * 1000) + 1);
     this.nextPicture();
 }
}
