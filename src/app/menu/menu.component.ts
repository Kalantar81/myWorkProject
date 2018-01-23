import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../services/get-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  aaa = "";
  range = "";

  constructor(private getData: GetDataService) {}

  ngOnInit() {
    console.log(this.getData.data);
  }

  printAaa(value){
    console.log(value);
  }

  saverange() {
    console.log(this.range);
  } 

  checkData(){
    console.log("from function: " + this.getData.data);
  }

}
