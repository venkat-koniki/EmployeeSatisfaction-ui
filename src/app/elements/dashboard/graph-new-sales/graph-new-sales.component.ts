import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph-new-sales',
  templateUrl: './graph-new-sales.component.html',
  styleUrls: ['./graph-new-sales.component.css']
})
export class GraphNewSalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  barChartOptions: ChartOptions = {
	responsive: true, 
	maintainAspectRatio: false,
	scales: {
			yAxes: [{
				display: false, 
				ticks: {
					beginAtZero: true, 
					display: false, 
					max: 100, 
					min: 0, 
					stepSize: 10
				}, 
				gridLines: {
					display: false, 
					drawBorder: false
				}
			}],
			xAxes: [{
				display: false, 
				gridLines: {
					display: false, 
					drawBorder: false
				}, 
				ticks: {
					display: false
				}
			}]
		}  
  };
  barChartLabels: Label[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
		label: 'My First dataset',
		data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 40], 
		borderColor: 'rgba(254, 99, 78, 1)',
		borderWidth: 0,
		backgroundColor: 'rgba(254, 99, 78, 1)', 
		hoverBackgroundColor: 'rgba(254, 99, 78, 1)'
	}
  ];
  
  
  /* barchartOptions1 = {
		type: 'bar',
		data: {
			defaultFontFamily: 'Poppins',
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
			datasets: [
				{
					label: "My First dataset",
					data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 40],
					borderColor: 'rgba(254, 99, 78, 1)',
					borderWidth: "0",
					backgroundColor: 'rgba(254, 99, 78, 1)', 
					hoverBackgroundColor: 'rgba(254, 99, 78, 1)'
				}
			]
		},
		options: {
			legend: false,
			responsive: true, 
			maintainAspectRatio: false,  
			scales: {
				yAxes: [{
					display: false, 
					ticks: {
						beginAtZero: true, 
						display: false, 
						max: 100, 
						min: 0, 
						stepSize: 10
					}, 
					gridLines: {
						display: false, 
						drawBorder: false
					}
				}],
				xAxes: [{
					display: false, 
					barPercentage: 0.4, 
					gridLines: {
						display: false, 
						drawBorder: false
					}, 
					ticks: {
						display: false
					}
				}]
			}
		}
	}; */
  
  
  
}
