import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexNonAxisChartSeries, ApexChart, ApexLegend, ApexPlotOptions } from "ng-apexcharts";


export type ChartOptions = {
    series: ApexNonAxisChartSeries | any;
    chart: ApexChart | any;
    legend: ApexLegend | any;
    colors: string[] | any;
    labels: string[] | any;
    plotOptions: ApexPlotOptions | any;
};



@Component({
    selector: 'app-graph-event-held',
    templateUrl: './graph-event-held.component.html',
    styleUrls: ['./graph-event-held.component.css']
})
export class GraphEventHeldComponent implements OnInit {
    
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
