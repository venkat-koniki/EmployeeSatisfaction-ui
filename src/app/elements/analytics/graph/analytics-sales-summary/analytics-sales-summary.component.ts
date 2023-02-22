import { Component, OnInit, ViewChild } from '@angular/core';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexYAxis,
    ApexLegend,
    ApexPlotOptions,
    ApexTheme,
    ApexStroke,
    ApexGrid,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    labels: string[] | any;
    fill: ApexFill | any;
    yaxis: ApexYAxis | any;
    legend: ApexLegend | any;
    plotOptions: ApexPlotOptions | any;
    theme: ApexTheme | any;
    grid: ApexGrid | any;
    stroke: ApexStroke | any;
};


@Component({
    selector: 'app-analytics-sales-summary',
    templateUrl: './analytics-sales-summary.component.html',
    styleUrls: ['./analytics-sales-summary.component.css']
})
export class AnalyticsSalesSummaryComponent implements OnInit {
        @ViewChild("chart") chart!: ChartComponent;
        public chartOptions: Partial<ChartOptions>;
        
        constructor() {
            this.chartOptions = {
                series: [42, 47, 52, 58],
                chart: {
                    width: 270,
                    type: 'polarArea',
                    sparkline: {
                        enabled: true,
                    },
                },
                labels: ['VIP', 'Reguler', 'Exclusive', 'Economic'],
                fill: {
                    opacity: 1,
                    colors: ['#707070', '#BFBFBF', '#F3F3F3', '#FE634E']
                },
                stroke: {
                    show:false,
                    width: 0,
                    colors: undefined
                },
                grid:{
                    show:false
                },
                yaxis: {
                    show: false
                },
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 0
                        }
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        shadeTo: 'light',
                        shadeIntensity: 0.6
                    }
                }
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
        