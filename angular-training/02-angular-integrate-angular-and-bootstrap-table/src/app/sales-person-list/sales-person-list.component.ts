import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

    // create an array of objects
    salesPersonList: SalesPerson[] = [
      new SalesPerson("Jono", "Muks", "jono.muks@angular.com", 50000),
      new SalesPerson("John", "Doe", "john.doe@angular.com", 40000),
      new SalesPerson("Claire", "Murphy", "claire.murphy@angular.com", 90000),
      new SalesPerson("Mai", "Truong", "mai.truong@angular.com", 60000),
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
