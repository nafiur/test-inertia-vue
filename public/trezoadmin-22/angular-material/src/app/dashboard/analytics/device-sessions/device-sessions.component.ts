import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DeviceSessionsService } from './device-sessions.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-device-sessions',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './device-sessions.component.html',
    styleUrl: './device-sessions.component.scss'
})
export class DeviceSessionsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private deviceSessionsService: DeviceSessionsService
    ) {}

    selectedTimeframe: string = 'Last Week'; // Default dropdown text

    ngOnInit(): void {
        const initialData = this.getChartData('Last Week');
        this.deviceSessionsService.initializeChart(initialData);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update button text
        const { series, labels } = this.getChartData(timeframe);
        this.deviceSessionsService.updateChartData(series, labels);
    }

    private getChartData(timeframe: string): { series: number[]; labels: string[] } {
        switch (timeframe) {
            case 'Last Day':
                return {
                    series: [60, 30, 5, 5],
                    labels: ["Desktop", "Mobile", "Tablet", "Others"]
                };
            case 'Last Week':
                return {
                    series: [55, 44, 30, 12],
                    labels: ["Desktop", "Mobile", "Tablet", "Others"]
                };
            case 'Last Month':
                return {
                    series: [50, 40, 20, 10],
                    labels: ["Desktop", "Mobile", "Tablet", "Others"]
                };
            case 'Last Year':
                return {
                    series: [45, 35, 15, 5],
                    labels: ["Desktop", "Mobile", "Tablet", "Others"]
                };
            default:
                return { series: [], labels: [] };
        }
    }

}