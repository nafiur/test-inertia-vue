import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicBubbleChartService } from './basic-bubble-chart.service';

@Component({
    selector: 'app-basic-bubble-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './basic-bubble-chart.component.html',
    styleUrl: './basic-bubble-chart.component.scss'
})
export class BasicBubbleChartComponent {

    constructor(
        private basicBubbleChartService: BasicBubbleChartService
    ) {}

    ngOnInit(): void {
        this.basicBubbleChartService.loadChart();
    }

}