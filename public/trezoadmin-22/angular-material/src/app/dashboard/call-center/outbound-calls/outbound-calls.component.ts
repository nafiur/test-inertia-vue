import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { OutboundCallsService } from './outbound-calls.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-outbound-calls',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './outbound-calls.component.html',
    styleUrl: './outbound-calls.component.scss'
})
export class OutboundCallsComponent {

    selectedTimeframe: string = 'This Year'; // Default dropdown selection
    chartData: { [key: string]: { series: { name: string; data: number[] }[]; categories: string[] } };

    constructor(
        public themeService: CustomizerSettingsService,
        private outboundCallsService: OutboundCallsService
    ) {
        this.chartData = {
            'This Day': {
                series: [{ name: "Outbound Calls", data: [10, 20, 15, 25, 30] }],
                categories: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM"]
            },
            'This Week': {
                series: [{ name: "Outbound Calls", data: [50, 60, 70, 80, 90, 100, 110] }],
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
            'This Month': {
                series: [{ name: "Outbound Calls", data: [200, 300, 250, 400] }],
                categories: ["Week 1", "Week 2", "Week 3", "Week 4"]
            },
            'This Year': {
                series: [{ name: "Outbound Calls", data: [100, 130, 115, 170, 110, 120, 160, 100, 200, 105, 130, 100] }],
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }
        };
    }

    ngOnInit(): void {
        const defaultData = this.chartData[this.selectedTimeframe];
        this.outboundCallsService.loadChart(defaultData.series, defaultData.categories);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe;
        const selectedData = this.chartData[timeframe];
        this.outboundCallsService.updateChart(selectedData.series, selectedData.categories);
    }

}