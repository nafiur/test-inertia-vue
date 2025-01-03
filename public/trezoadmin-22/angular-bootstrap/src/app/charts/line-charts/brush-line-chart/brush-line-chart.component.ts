import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrushLineChartService } from './brush-line-chart.service';

@Component({
    selector: 'app-brush-line-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './brush-line-chart.component.html',
    styleUrl: './brush-line-chart.component.scss'
})
export class BrushLineChartComponent {

    constructor(
        private brushLineChartService: BrushLineChartService
    ) {}

    ngOnInit(): void {
        this.brushLineChartService.loadChart();
    }

}