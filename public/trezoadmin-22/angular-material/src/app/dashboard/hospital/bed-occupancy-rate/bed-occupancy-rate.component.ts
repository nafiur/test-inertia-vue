import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { BedOccupancyRateService } from './bed-occupancy-rate.service';

@Component({
    selector: 'app-bed-occupancy-rate',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './bed-occupancy-rate.component.html',
    styleUrl: './bed-occupancy-rate.component.scss'
})
export class BedOccupancyRateComponent {

    selectedTimeframe: string = 'This Day'; // Default dropdown text
    dataMap: { [key: string]: number[] } = {
        'This Day': [1275, 825, 450],
        'This Week': [1300, 900, 400],
        'This Month': [1400, 1000, 300],
        'This Year': [1500, 1200, 250]
    };

    constructor(
        public themeService: CustomizerSettingsService,
        private bedOccupancyRateService: BedOccupancyRateService
    ) {}

    ngOnInit(): void {
        // Load the default chart data
        const defaultData = this.dataMap[this.selectedTimeframe];
        this.bedOccupancyRateService.loadChart(defaultData);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update dropdown text
        const updatedData = this.dataMap[timeframe];
        this.bedOccupancyRateService.updateChartData(updatedData);
    }

}