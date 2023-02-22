import { Component, OnInit, ViewChild } from '@angular/core';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexLegend,
    ApexPlotOptions,
    ApexStroke,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    dataLabels: ApexDataLabels | any;
    colors: string[] | any;
    legend: ApexLegend | any;
    plotOptions: ApexPlotOptions | any;
    stroke: ApexStroke | any;
    labels: string[] | any;
};

@Component({
    selector: 'app-graph-best-selling',
    templateUrl: './graph-best-selling.component.html',
    styleUrls: ['./graph-best-selling.component.css']
})
export class GraphBestSellingComponent implements OnInit {
    
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    
    constructor() {
        this.chartOptions = {
            series: [25, 30, 45],
            chart: {
                type: "donut"
            },
            legend: {
                show:false,
            },
            dataLabels: {
                formatter(val:any, opts:any) {
                    const name = opts.w.globals.labels[opts.seriesIndex]
                    return [ val.toFixed() + '%']
                },
                dropShadow: {
                    enabled: false
                },
                style: {
                    fontSize: '15px',
                    colors: ["#fff"],
                }
            },
            colors:['#FE634E','#45ADDA','#214BB8'],
            plotOptions: {
                pie: {
                    
                    donut: {
                        size: '35%',
                    }
                },
            },
            stroke:{
                width:10
            },
		    
            labels: ["Series-1", "Series-2", "Series-3"],
        };
    }
    
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
