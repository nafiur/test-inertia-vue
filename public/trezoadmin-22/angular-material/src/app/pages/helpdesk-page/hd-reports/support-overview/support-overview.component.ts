import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SupportOverviewService } from './support-overview.service';

@Component({
    selector: 'app-support-overview',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './support-overview.component.html',
    styleUrl: './support-overview.component.scss'
})
export class SupportOverviewComponent {

    selectedTimeframe: string = 'Last Week'; // Default dropdown text
    chartData: { [key: string]: number[] };

    constructor(private supportOverviewService: SupportOverviewService) {
        // Define the data for each timeframe
        this.chartData = {
            'Last Day': [10, 5, 3, 2],
            'Last Week': [55, 44, 30, 12],
            'Last Month': [200, 150, 100, 50],
            'Last Year': [800, 600, 400, 200]
        };
    }

    ngOnInit(): void {
        // Load the default chart
        const defaultData = this.chartData[this.selectedTimeframe];
        this.supportOverviewService.loadChart(defaultData);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update button text
        const selectedData = this.chartData[timeframe];
        this.supportOverviewService.updateChart(selectedData);
    }

}