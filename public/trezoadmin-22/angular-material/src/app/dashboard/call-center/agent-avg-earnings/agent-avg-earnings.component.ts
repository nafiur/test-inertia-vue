import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AgentAvgEarningsService } from './agent-avg-earnings.service';
import { NgClass } from '@angular/common';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-agent-avg-earnings',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, NgClass],
    templateUrl: './agent-avg-earnings.component.html',
    styleUrl: './agent-avg-earnings.component.scss'
})
export class AgentAvgEarningsComponent {

    chartData: { [key: string]: { series: { name: string; data: number[] }[]; categories: string[] } };
    activeTimeframe: string = 'This Year'; // Default active timeframe

    constructor(
        public themeService: CustomizerSettingsService,
        private agentAvgEarningsService: AgentAvgEarningsService
    ) {
        this.chartData = {
            'This Day': {
                series: [{ name: "Earnings", data: [5, 10, 15, 20, 25] }],
                categories: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM"]
            },
            'This Week': {
                series: [{ name: "Earnings", data: [10, 20, 30, 40, 50, 60, 70] }],
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
            'This Month': {
                series: [{ name: "Earnings", data: [100, 200, 300, 400] }],
                categories: ["Week 1", "Week 2", "Week 3", "Week 4"]
            },
            'This Year': {
                series: [{ name: "Earnings", data: [20, 40, 60, 60, 50, 30, 40, 30, 40, 40, 60, 60] }],
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }
        };
    }

    ngOnInit(): void {
        const defaultData = this.chartData[this.activeTimeframe];
        this.agentAvgEarningsService.loadChart(defaultData.series, defaultData.categories);
    }

    onTimeframeChange(timeframe: string): void {
        this.activeTimeframe = timeframe; // Update active class
        const selectedData = this.chartData[timeframe];
        this.agentAvgEarningsService.updateChart(selectedData.series, selectedData.categories);
    }

}