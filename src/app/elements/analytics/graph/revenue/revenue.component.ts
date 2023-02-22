import { Component, OnInit, ViewChild } from '@angular/core';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexLegend,
    ApexPlotOptions,
    ApexTitleSubtitle,
    ApexGrid,
    ApexXAxis,
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
    title: ApexTitleSubtitle | any;
    grid: ApexGrid | any;
    xaxis: ApexXAxis | any;
    
};

@Component({
    selector: 'app-revenue',
    templateUrl: './revenue.component.html',
    styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {
    
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    
    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Sales",
                    data: [80, 50, 70, 40, 60, 30, 50],
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                colors: ["#FE634E"],
            },
            colors: ["#FE634E"],
            title: {
                text: "My First dataset",
                align: "left"
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep"
                ]
            }
        };
    }
    
    ngOnInit(): void {
    }
}
