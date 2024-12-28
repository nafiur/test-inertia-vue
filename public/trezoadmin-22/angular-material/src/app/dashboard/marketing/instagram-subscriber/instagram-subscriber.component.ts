import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { InstagramSubscriberService } from './instagram-subscriber.service';

@Component({
    selector: 'app-instagram-subscriber',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './instagram-subscriber.component.html',
    styleUrl: './instagram-subscriber.component.scss'
})
export class InstagramSubscriberComponent {

    selectedTimeframe: string = 'This Year'; // Default timeframe
    chartData: { [key: string]: { series: { name: string; data: number[] }[]; categories: string[] } };

    constructor(
        private instagramSubscriberService: InstagramSubscriberService
    ) {
        this.chartData = {
            'This Day': {
                series: [
                    { name: "Gained", data: [10, 20, 15, 30] },
                    { name: "Lost", data: [-5, -10, -8, -15] }
                ],
                categories: ["6 AM", "9 AM", "12 PM", "3 PM"]
            },
            'This Week': {
                series: [
                    { name: "Gained", data: [70, 42, 70, 120, 40, 70, 90] },
                    { name: "Lost", data: [-70, -44, -70, -120, -40, -70, -90] }
                ],
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
            'This Month': {
                series: [
                    { name: "Gained", data: [70, 42, 70, 120] },
                    { name: "Lost", data: [-70, -44, -70, -120] }
                ],
                categories: ["Week 1", "Week 2", "Week 3", "Week 4"]
            },
            'This Year': {
                series: [
                    { name: "Gained", data: [70, 42, 70, 120, 40, 70, 90, 70, 25, 70, 120, 40] },
                    { name: "Lost", data: [-70, -44, -70, -120, -40, -70, -120, -70, -30, -70, -80, -40] }
                ],
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }
        };
    }

    ngOnInit(): void {
        const defaultData = this.chartData[this.selectedTimeframe];
        this.instagramSubscriberService.loadChart(defaultData.series, defaultData.categories);
    }

    onTimeframeChange(timeframe: string): void {
        const selectedData = this.chartData[timeframe];
        this.instagramSubscriberService.updateChart(selectedData.series, selectedData.categories);
    }

}