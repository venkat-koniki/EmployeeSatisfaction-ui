import { Component, OnInit, ViewChild } from '@angular/core';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexLegend,
    ApexPlotOptions,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    dataLabels: ApexDataLabels | any;
    colors: string[] | any;
    legend: ApexLegend | any;
    plotOptions: ApexPlotOptions | any;
    labels: string[] | any;
};

@Component({
    selector: 'app-available-ticket',
    templateUrl: './available-ticket.component.html',
    styleUrls: ['./available-ticket.component.css']
})
export class AvailableTicketComponent implements OnInit {
    
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    
    constructor() {
        this.chartOptions = {
            series: [90],
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
