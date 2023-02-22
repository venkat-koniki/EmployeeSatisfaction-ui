import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-latest-sales',
  templateUrl: './latest-sales.component.html',
  styleUrls: ['./latest-sales.component.css']
})
export class LatestSalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
	 
  timePeriod  = [
    {value: 'week-1', viewValue: 'This Week'},
    {value: 'week-2', viewValue: 'Next Week'},
    {value: 'month-1', viewValue: 'This Month'},
    {value: 'month-2', viewValue: 'Next Month'}
  ];
  selected = "week-1";
}
