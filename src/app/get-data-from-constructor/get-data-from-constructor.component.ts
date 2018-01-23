import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-get-data-from-constructor',
  templateUrl: './get-data-from-constructor.component.html',
  styleUrls: ['./get-data-from-constructor.component.css']
})
export class GetDataFromConstructorComponent implements OnInit {

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.getData('./assets/data.json')
      .subscribe(
        data => console.log("data from component: " + data)
      )
  }

}
