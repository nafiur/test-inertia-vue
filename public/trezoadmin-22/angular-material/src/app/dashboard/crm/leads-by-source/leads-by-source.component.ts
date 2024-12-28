import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { LeadsBySourceService } from './leads-by-source.service';

@Component({
    selector: 'app-leads-by-source',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatProgressBarModule],
    templateUrl: './leads-by-source.component.html',
    styleUrl: './leads-by-source.component.scss'
})
export class LeadsBySourceComponent {

    selectedTimeframe: string = 'This Month'; // Default dropdown text
    chartData: { [key: string]: { series: number[]; labels: string[] } };

    constructor(
        public themeService: CustomizerSettingsService,
        private leadsBySourceService: LeadsBySourceService
    ) {
        // Define the data for each timeframe
        this.chartData = {
            'This Day': {
                series: [10, 5, 2, 8, 3, 1],
                labels: ['Organic', 'Paid', 'Direct', 'Social', 'Referrals', 'Others']
            },
            'This Week': {
                series: [50, 30, 15, 40, 20, 5],
                labels: ['Organic', 'Paid', 'Direct', 'Social', 'Referrals', 'Others']
            },
            'This Month': {
                series: [320, 60, 30, 160, 279, 19],
                labels: ['Organic', 'Paid', 'Direct', 'Social', 'Referrals', 'Others']
            },
            'This Year': {
                series: [1500, 700, 500, 1200, 900, 200],
                labels: ['Organic', 'Paid', 'Direct', 'Social', 'Referrals', 'Others']
            }
        };
    }

    ngOnInit(): void {
        // Load the default chart
        const defaultData = this.chartData[this.selectedTimeframe];
        this.leadsBySourceService.loadChart(defaultData.series, defaultData.labels);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update button text
        const selectedData = this.chartData[timeframe];
        this.leadsBySourceService.updateChart(selectedData.series, selectedData.labels);
    }

}