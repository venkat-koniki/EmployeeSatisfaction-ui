import { Component, OnInit } from '@angular/core';
/* import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts'; */

@Component({
  selector: 'app-graph-sales-revenue',
  templateUrl: './graph-sales-revenue.component.html',
  styleUrls: ['./graph-sales-revenue.component.css']
})
export class GraphSalesRevenueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  /* lineChartData: ChartDataSets[] = [
    
		{
			label: "My First dataset",
			data:  [60, 40, 70, 40, 60, 80, 50, 45, 70, 45, 70, 40],
			borderColor: 'rgba(254, 99, 78, 1)',
			borderWidth: 8,
			backgroundColor: 'rgba(254, 99, 78, 0.1)'
		},
		{
			label: "My Second dataset",
			data:  [35, 35, 40, 30, 38, 40, 30, 38, 32, 42, 32, 42],
			borderColor: 'rgba(254, 99, 78, 1)',
			borderWidth: 8,
			backgroundColor: 'rgba(254, 99, 78, 0.1)'
		},
		{
			label: "My Second dataset",
			data:  [35, 40, 30, 38, 32, 42, 30, 35, 22, 30, 45, 30],
			borderColor: 'rgba(254, 99, 78, 1)',
			borderWidth: 8,
			backgroundColor: 'rgba(254, 99, 78, 0.1)'
		}
	
  ];

  lineChartLabels: Label[] = ["January", "February","March","April","May","June","July","August","September","October","November","December",];

  lineChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		elements: {
				point:{
					radius: 0
				}
		},
		
		
		scales: {
			yAxes: [{
				gridLines: {
					color: "rgba(89, 59, 219,0.1)",
					drawBorder: true,
					display: true,
				},
				ticks: {
					fontColor: "#999",
				},
			}],
			xAxes: [{
				gridLines: {
					display: false,
					zeroLineColor: "transparent"
				},
				ticks: {
					stepSize: 5,
					fontColor: "#999",
					fontFamily: "Nunito, sans-serif"
				}
			}]
		},
		tooltips: {
			enabled: false,
			mode: "index",
			intersect: false,
			titleFontColor: "#888",
			bodyFontColor: "#555",
			titleFontSize: 12,
			bodyFontSize: 15,
			backgroundColor: "rgba(256,256,256,0.95)",
			displayColors: true,
			xPadding: 10,
			yPadding: 7,
			borderColor: "rgba(220, 220, 220, 0.9)",
			borderWidth: 2,
			caretSize: 6,
			caretPadding: 10
		}
	};

  lineChartColors: Color[] = [
    {
      borderColor: '#FE634E',
      backgroundColor: 'rgba(254, 99, 78, 0.1)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line'; */

}
