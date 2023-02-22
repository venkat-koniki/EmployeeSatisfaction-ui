import { Component, OnInit, ViewChild } from '@angular/core';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexLegend,
    ApexPlotOptions,
    ApexStroke,
    ApexFill,
    ApexResponsive,
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
    fill: ApexFill | any;
    responsive: ApexResponsive[] | any;
    
};

@Component({
    selector: 'app-ticket-sold',
    templateUrl: './ticket-sold.component.html',
    styleUrls: ['./ticket-sold.component.css']
})
export class TicketSoldComponent implements OnInit {
    
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    
    constructor() {
        this.chartOptions = {
            series: [65, 55, 45],
            chart: {
                type: 'radialBar',
                height: 350,
                offsetY: 0,
                offsetX: 0,
                sparkline: {
                    enabled: true,
                },
            },
            plotOptions: {
                radialBar: {
                    size: undefined,
                    inverseOrder: false,
                    hollow: {
                        margin: 0,
                        size: '25%',
                        background: 'transparent',
                    },
                    
                    track: {
                        show: true,
                        background: '#e1e5ff',
                        strokeWidth: '12%',
                        opacity: 1,
                        margin: 10, // margin is in pixels
                    },
                },
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        offsetY: 0,
                        offsetX: 0
                    },	
                    legend: {
                        position: 'bottom',
                        offsetX:0,
                        offsetY: 0
                    }
                }
            }],	
            fill: {
                opacity: 1
            },
            stroke:{
                lineCap: 'round'
            },
            colors:['#FE634E','#707070', '#BFBFBF'],
            labels: ['Ticket A', 'Ticket B', 'Ticket C'],
            legend: {
                fontSize: '14px',  
                show: true,
                position: 'bottom'
                
            },
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
