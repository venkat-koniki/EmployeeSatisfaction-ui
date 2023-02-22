import { Component, OnInit, ViewChild } from '@angular/core';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexLegend,
    ApexPlotOptions,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    colors: string[] | any;
    legend: ApexLegend | any;
    plotOptions: ApexPlotOptions | any;
    labels: string[] | any;
    
};

@Component({
    selector: 'app-adult',
    templateUrl: './adult.component.html',
    styleUrls: ['./adult.component.css']
})
export class AdultComponent implements OnInit {
    
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    
    constructor() {
        this.chartOptions = {
            series: [85],
            chart: {
                height: 110,
                width: 110,
                type: "radialBar",
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            legend: {
                show:false,
            },
            colors:['#FE634E'],
            plotOptions: {
                radialBar: {
                    
                    hollow: {
                        margin: 0,
                        size: "50%",
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: 7,
                            show: true
                        }
                    }
                }
            },
            labels: ["Events"]
        };
    }
    
    ngOnInit(): void {
    }
    
}
