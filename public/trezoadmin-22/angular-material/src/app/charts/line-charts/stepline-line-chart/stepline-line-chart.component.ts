import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { SteplineLineChartService } from './stepline-line-chart.service';

@Component({
    selector: 'app-stepline-line-chart',
    standalone: true,
    imports: [RouterLink, MatCardModule],
    templateUrl: './stepline-line-chart.component.html',
    styleUrl: './stepline-line-chart.component.scss'
})
export class SteplineLineChartComponent {

    constructor(
        private steplineLineChartService: SteplineLineChartService
    ) {}

    ngOnInit(): void {
        this.steplineLineChartService.loadChart();
    }

}