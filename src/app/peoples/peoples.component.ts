import { Component, OnInit } from '@angular/core';
//import peoples from '../../assets/peoples.json';
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';


@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})


export class PeoplesComponent implements OnInit {

 // constructor() { }
  //public peopleList:{name:string, gender:string}[] = peoples;

  //ngOnInit(): void {
  //}

  peopleList: any = [];
  originalPeoples;
  orderedPeoples;

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("http://agl-developer-test.azurewebsites.net/people.json").subscribe(data =>{
     this.originalPeoples = data;
     this.sortBy('gender');
    //console.log(data);
      this.peopleList = data; //_.sortBy(data,"pets.name");
      //this.peopleList = _.orderBy(data, [(pitem) => {
      //  const nestedObj = _.get(pitem, 'pets');
      //  pitem['pets'] = _.orderBy(nestedObj,'pets.name','desc');
      //return pitem['pets.name'];
    //}], 'desc');
      //this.peopleList.subscribe((data) => {
      //  this.originalPeoples = data;
      //  this.sortBy('gender');
      //}  ); 
      //= this.peopleList.orderBy(c=>c.gender).toList();
      
      //var groupedPeople = groupBy(this.peopleList, 'gender')
    })
  }

  sortBy(field1: string) {

    this.originalPeoples.sort((a: any, b: any) => {
        if (a[field1] < b[field1]) {
            return -1;
        } else if (a[field1] > b[field1]) {
            return 1;
        } else {
            return 0;
        }
    });
    this.orderedPeoples = this.originalPeoples;
  }
  
}


