import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { OrderSummaryService } from './order-summary.service';

@Component({
    selector: 'app-order-summary',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatProgressBarModule],
    templateUrl: './order-summary.component.html',
    styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {

    selectedTimeframe: string = 'This Year'; // Default dropdown text
    chartData: { [key: string]: { series: number[]; labels: string[] } };

    constructor(
        public themeService: CustomizerSettingsService,
        private orderSummaryService: OrderSummaryService
    ) {
        // Define the data for each timeframe
        this.chartData = {
            'This Day': {
                series: [40, 30, 30],
                labels: ['Completed', 'New Order', 'Pending']
            },
            'This Week': {
                series: [60, 25, 15],
                labels: ['Completed', 'New Order', 'Pending']
            },
            'This Month': {
                series: [50, 40, 10],
                labels: ['Completed', 'New Order', 'Pending']
            },
            'This Year': {
                series: [60, 30, 10],
                labels: ['Completed', 'New Order', 'Pending']
            }
        };
    }

    ngOnInit(): void {
        // Load the default chart
        const defaultData = this.chartData[this.selectedTimeframe];
        this.orderSummaryService.loadChart(defaultData.series, defaultData.labels);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update the button text
        const selectedData = this.chartData[timeframe];
        this.orderSummaryService.updateChart(selectedData.series, selectedData.labels);
    }

}