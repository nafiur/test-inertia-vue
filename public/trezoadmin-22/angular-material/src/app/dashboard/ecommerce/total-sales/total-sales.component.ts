import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TotalSalesService } from './total-sales.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-total-sales',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatSelectModule, MatInputModule],
    templateUrl: './total-sales.component.html',
    styleUrl: './total-sales.component.scss'
})
export class TotalSalesComponent {

    selectedTimeframe: string = 'Monthly'; // Default dropdown text
    chartData: { [key: string]: { series: { name: string; data: number[] }[]; categories: string[] } };

    constructor(
        private totalSalesService: TotalSalesService
    ) {
        // Define the data for each timeframe
        this.chartData = {
            Weekly: {
                series: [
                    { name: 'Current Sale', data: [35, 50, 55, 60, 50, 60, 55] },
                    { name: 'Last Year Sale', data: [70, 50, 40, 40, 62, 52, 80] }
                ],
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            Monthly: {
                series: [
                    { name: 'Current Sale', data: [35, 50, 55, 60, 50, 60, 55, 60, 78, 40, 95, 80] },
                    { name: 'Last Year Sale', data: [70, 50, 40, 40, 62, 52, 80, 40, 60, 53, 70, 70] }
                ],
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            Yearly: {
                series: [
                    { name: 'Current Sale', data: [2000, 3000, 2500, 4000] },
                    { name: 'Last Year Sale', data: [1500, 2000, 1800, 3000] }
                ],
                categories: ['Q1', 'Q2', 'Q3', 'Q4']
            }
        };
    }

    ngOnInit(): void {
        // Load the default chart
        const defaultData = this.chartData[this.selectedTimeframe];
        this.totalSalesService.loadChart(defaultData.series, defaultData.categories);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update the button text
        const selectedData = this.chartData[timeframe];
        this.totalSalesService.updateChart(selectedData.series, selectedData.categories);
    }

}