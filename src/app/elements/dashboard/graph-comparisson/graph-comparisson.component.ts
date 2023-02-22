import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-graph-comparisson',
  templateUrl: './graph-comparisson.component.html',
  styleUrls: ['./graph-comparisson.component.css']
})
export class GraphComparissonComponent implements OnInit {

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
  
  lineChartData: ChartDataSets[] = [
    { 
		backgroundColor: ['rgba(19, 180, 151, 0)'],
		borderColor: '#FE634E',
		pointBackgroundColor: '#FE634E',
		pointBorderColor: '#FE634E',
		borderWidth:6,
		/* borderRadius:10, */
		pointHoverBackgroundColor: '#FE634E',
		pointHoverBorderColor: '#FE634E',
		data: [2, 1, 3, 1, 4, 5, 2, 3],
		label: 'Sales Stats' 
	},
  ];

  lineChartLabels: Label[] = ["January", "February", "March", "April", "May", "June", "July", "Aug"];

  lineChartOptions:any = {
    responsive: true,
	
	title: {
		display: !1
	},
	tooltips: {
		intersect: !1,
		mode: "nearest",
		xPadding: 10,
		yPadding: 10,
		caretPadding: 10
	},
					
	legend: {
		display: !1
	},
	maintainAspectRatio: !1,
	hover: {
		mode: "index"
	},
		scales: {
			xAxes: [{
				display: !1,
				gridLines: !1,
				scaleLabel: {
					display: !0,
					labelString: "Month"
				}
			}],
			yAxes: [{
				display: !1,
				gridLines: !1,
				scaleLabel: {
					display: !0,
					labelString: "Value"
				},
				ticks: {
					beginAtZero: !0
				}
			}]
		},
		elements: {
			
			point: {
				radius: 0,
				borderWidth: 0
			}
		},
		layout: {
			padding: {
				left: 0,
				right: 0,
				top: 5,
				bottom: 0
			}
		}
				
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#FE634E',
      backgroundColor: 'transparent',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType:any = 'line';

}
