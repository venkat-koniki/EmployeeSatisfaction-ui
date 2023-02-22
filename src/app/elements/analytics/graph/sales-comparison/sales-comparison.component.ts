import { Component, OnInit, ViewChild  } from '@angular/core';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexResponsive,
    ApexFill,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ApexPlotOptions,
    ApexTheme,
    ApexDataLabels,
    ApexStroke,
    ApexGrid,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    responsive: ApexResponsive[] | any;
    labels: string[] | any;
    fill: ApexFill | any;
    xaxis: ApexXAxis | any;
    yaxis: ApexYAxis | any;
    legend: ApexLegend | any;
    plotOptions: ApexPlotOptions | any;
    theme: ApexTheme | any;
    dataLabels: ApexDataLabels | any;
    grid: ApexGrid | any;
    stroke: ApexStroke | any;
    colors: string[] | any;
};


@Component({
    selector: 'app-sales-comparison',
    templateUrl: './sales-comparison.component.html',
    styleUrls: ['./sales-comparison.component.css']
})
export class SalesComparisonComponent implements OnInit {
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    
    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: 'Aplication Sent',
                    data: [40, 60, 20, 45, 70, 35, 40, 75, 45, 30, 55, 65, 20]
                },
                {
                    name: 'Appllication Answered',
                    data: [20, 35, 40, 60,  35, 16, 60, 45, 60, 45, 20, 35, 55]
                },
            ],
            chart: {
                type: 'bar',
                height: 250,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape: "rounded",
                    startingShape: "rounded",
                    backgroundRadius: 10,
                    columnWidth: '30%',
                    colors: {
                        backgroundBarColors: ['#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC', '#ECECEC'],
                        backgroundBarOpacity: 1,
                        backgroundBarRadius: 10,
                    },
                },
                
            },
            colors:[ '#707070', '#FE634E'],
            xaxis: {
                show: true,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: '#828282',
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        fontWeight: 'light',
                        cssClass: 'apexcharts-xaxis-label',
                    },
                },
                crosshairs: {
                    show: false,
                },
                
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false,
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show:false
            },
            fill: {
                opacity: 1
            }
        };
    }
    
    ngOnInit(): void {
    }
    
    
     
    
}
