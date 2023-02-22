import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexLegend,
  ApexPlotOptions,
  // ApexXAxis,
  // ApexDataLabels,
  // ApexYAxis,
  ApexFill,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  legend: ApexLegend | any;
  plotOptions: ApexPlotOptions | any;
  // xaxis: ApexXAxis | any;
  // dataLabels: ApexDataLabels | any;
  // yaxis: ApexYAxis | any;
  colors: string[] | any;
  fill: ApexFill | any;
  stroke: ApexStroke | any;
  labels: string[] | any;
};

@Component({
    selector: 'app-sales-summary',
    templateUrl: './sales-summary.component.html',
    styleUrls: ['./sales-summary.component.css']
})
export class SalesSummaryComponent implements OnInit {
    
    
    
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    
    constructor() {
        this.chartOptions = {
            series: [46],
            chart: {
                height: 250,
                type: "radialBar"
            },
            legend: {
                show:false,
            },colors:['#FE634E'],
            plotOptions: {
                radialBar: {
                    
                    hollow: {
                        size: '55%',
                        background: '#fff',
                        image: undefined,
                        imageOffsetX: 0,
                        imageOffsetY: 0,
                        position: 'front',
                    },
                    dataLabels: {
                        
                        value: {
                            offsetY: 0,
                            fontSize:'24px',
                            color:'black'
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                colors:'#FE634E',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                lineCap: 'round',
                colors:'#FE634E'
            },
            labels: [""]
        };
    }
    
    ngOnInit(): void {
    }
    
}
