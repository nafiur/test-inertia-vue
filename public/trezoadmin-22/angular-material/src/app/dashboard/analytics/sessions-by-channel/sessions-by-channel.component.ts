import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SessionsByChannelService } from './sessions-by-channel.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-sessions-by-channel',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './sessions-by-channel.component.html',
    styleUrl: './sessions-by-channel.component.scss'
})
export class SessionsByChannelComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private sessionsByChannelService: SessionsByChannelService
    ) {}

    selectedTimeframe: string = 'Last 30 Days'; // Default dropdown text

    ngOnInit(): void {
        const initialData = this.getChartData('Last 30 Days');
        this.sessionsByChannelService.initializeChart(initialData);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update button text
        const { series, labels } = this.getChartData(timeframe);
        this.sessionsByChannelService.updateChartData(series, labels);
    }

    private getChartData(timeframe: string): { series: number[]; labels: string[] } {
        switch (timeframe) {
            case 'Last 7 Days':
                return {
                    series: [200, 150, 100, 50, 30, 20],
                    labels: ["Email", "Organic Search", "Direct Browse", "Paid Search", "Social", "Referral"]
                };
            case 'Last 15 Days':
                return {
                    series: [300, 250, 180, 100, 50, 30],
                    labels: ["Email", "Organic Search", "Direct Browse", "Paid Search", "Social", "Referral"]
                };
            case 'Last 30 Days':
                return {
                    series: [976, 651, 818, 459, 320, 209],
                    labels: ["Email", "Organic Search", "Direct Browse", "Paid Search", "Social", "Referral"]
                };
            default:
                return { series: [], labels: [] };
        }
    }

}