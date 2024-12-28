import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeWorkFormatService } from './employee-work-format.service';

@Component({
    selector: 'app-employee-work-format',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './employee-work-format.component.html',
    styleUrl: './employee-work-format.component.scss'
})
export class EmployeeWorkFormatComponent {
    
    constructor(
        public themeService: CustomizerSettingsService,
        private employeeWorkFormatService: EmployeeWorkFormatService
    ) {}

    ngOnInit(): void {
        this.loadChart([120, 160, 50, 20]); // Default data for "This Month"
    }

    onTimeframeChange(timeframe: string): void {
        // Define data for different timeframes
        let data: number[] = [];
        switch (timeframe) {
            case 'This Day':
            data = [10, 15, 5, 2]; // Example data for "This Day"
            break;
            case 'This Week':
            data = [40, 50, 20, 10]; // Example data for "This Week"
            break;
            case 'This Month':
            data = [120, 160, 50, 20]; // Example data for "This Month"
            break;
            case 'This Year':
            data = [500, 600, 300, 100]; // Example data for "This Year"
            break;
        }
        this.loadChart(data); // Reload the chart with new data
    }

    loadChart(data: number[]): void {
        this.employeeWorkFormatService.loadChart(data); // Pass data to the service
    }

}