import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicBoxplotChartService } from './basic-boxplot-chart.service';

@Component({
    selector: 'app-basic-boxplot-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './basic-boxplot-chart.component.html',
    styleUrl: './basic-boxplot-chart.component.scss'
})
export class BasicBoxplotChartComponent {

    constructor(
        private basicBoxplotChartService: BasicBoxplotChartService
    ) {}

    ngOnInit(): void {
        this.basicBoxplotChartService.loadChart();
    }

}