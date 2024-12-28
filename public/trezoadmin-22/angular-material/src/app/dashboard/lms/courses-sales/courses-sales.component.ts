import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { CoursesSalesService } from './courses-sales.service';

@Component({
    selector: 'app-courses-sales',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './courses-sales.component.html',
    styleUrl: './courses-sales.component.scss'
})
export class CoursesSalesComponent {

    selectedTimeframe: string = 'This Year'; // Default dropdown text
    chartData: { [key: string]: { series: { name: string; data: number[] }[]; categories: string[] } };

    constructor(
        public themeService: CustomizerSettingsService,
        private coursesSalesService: CoursesSalesService
    ) {
        // Define the data for each timeframe
        this.chartData = {
            'This Day': {
                series: [
                    { name: 'Sales', data: [10, 15, 20, 25, 30] }
                ],
                categories: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM']
            },
            'This Week': {
                series: [
                    { name: 'Sales', data: [70, 85, 90, 60, 100, 120, 110] }
                ],
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            'This Month': {
                series: [
                    { name: 'Sales', data: [250, 400, 300, 500] }
                ],
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
            },
            'This Year': {
                series: [
                    { name: 'Sales', data: [100, 130, 115, 140, 110, 120, 85, 140, 170, 100, 110, 90] }
                ],
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        };
    }

    ngOnInit(): void {
        // Load the default chart
        const defaultData = this.chartData[this.selectedTimeframe];
        this.coursesSalesService.loadChart(defaultData.series, defaultData.categories);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update button text
        const selectedData = this.chartData[timeframe];
        this.coursesSalesService.updateChart(selectedData.series, selectedData.categories);
    }

}