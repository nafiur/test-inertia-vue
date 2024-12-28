import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AnalyticsOverviewService } from './analytics-overview.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-analytics-overview',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatProgressBarModule],
    templateUrl: './analytics-overview.component.html',
    styleUrl: './analytics-overview.component.scss'
})
export class AnalyticsOverviewComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private analyticsOverviewService: AnalyticsOverviewService
    ) {}

    selectedTimeframe: string = 'Week'; // Default selected button

    ngOnInit(): void {
        const initialData = this.getChartData('Week');
        this.analyticsOverviewService.initializeChart(initialData);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update selected timeframe
        const { series, categories } = this.getChartData(timeframe);
        this.analyticsOverviewService.updateChartData(series, categories);
    }

    private getChartData(timeframe: string): { series: any[]; categories: string[] } {
        switch (timeframe) {
            case 'Day':
                return {
                    series: [
                        { name: "New users", data: [10, 20, 30, 40, 50, 60, 70] },
                        { name: "Page Views", data: [50, 40, 30, 20, 10, 50, 40] },
                        { name: "Page Sessions", data: [30, 20, 50, 40, 70, 60, 80] },
                        { name: "Bounce Rate", data: [40, 30, 20, 10, 50, 60, 70] }
                    ],
                    categories: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM", "12 AM"]
                };

            case 'Week':
                return {
                    series: [
                        { name: "New users", data: [28, 50, 90, 95, 20, 70, 35] },
                        { name: "Page Views", data: [80, 60, 70, 30, 45, 20, 80] },
                        { name: "Page Sessions", data: [32, 23, 78, 35, 65, 35, 15] },
                        { name: "Bounce Rate", data: [60, 25, 80, 25, 15, 40, 15] }
                    ],
                    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                };

            case 'Month':
                return {
                    series: [
                        { name: "New users", data: [100, 120, 150, 180] },
                        { name: "Page Views", data: [300, 250, 200, 180] },
                        { name: "Page Sessions", data: [220, 180, 150, 130] },
                        { name: "Bounce Rate", data: [120, 130, 140, 150] }
                    ],
                    categories: ["Week 1", "Week 2", "Week 3", "Week 4"]
                };

            default:
                return { series: [], categories: [] };
        }
    }

}