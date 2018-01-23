import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel } from '../models/dataModel';

@Injectable()
export class GetDataService {

  data : DataModel;


  constructor(private http: HttpClient) {
    this.http.get('./assets/data.json')
        .subscribe(
          (data : DataModel) => {
            this.data = data;
            // console.log(this.data);
          }
        )
  }


  getData(jsonUrl: string){
    return this.http.get(jsonUrl);
    };



}
