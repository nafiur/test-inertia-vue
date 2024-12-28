import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PropertiesForSaleService {

    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    async loadChart(): Promise<void> {
        if (this.isBrowser) {
            try {
                // Dynamically import ApexCharts
                const ApexCharts = (await import('apexcharts')).default;

                // Define chart options
                const options = {
                    series: [
                        75
                    ],
                    chart: {
                        height: 155,
                        type: "radialBar",
                    },
                    colors: [
                        "#37D80A"
                    ],
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                margin: 10,
                                size: "45%",
                                background: "#F5F7F8"
                            },
                            track: {
                                background: "#F5F7F8"
                            },
                            dataLabels: {
                                name: {
                                    show: false,
                                    offsetY: -10,
                                    color: "#4b9bfa",
                                    fontSize: ".625rem"
                                },
                                value: {
                                    offsetY: 5,
                                    show: true,
                                    fontWeight: 700,
                                    color: "#3A4252",
                                    fontSize: "14px"
                                }
                            }
                        }
                    },
                    stroke: {
                        lineCap: "0"
                    },
                    labels: ["Status"]
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#propertiesForSaleChart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}