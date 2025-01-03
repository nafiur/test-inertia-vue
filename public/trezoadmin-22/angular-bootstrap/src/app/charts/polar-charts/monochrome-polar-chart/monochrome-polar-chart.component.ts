import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MonochromePolarChartService } from './monochrome-polar-chart.service';

@Component({
    selector: 'app-monochrome-polar-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './monochrome-polar-chart.component.html',
    styleUrl: './monochrome-polar-chart.component.scss'
})
export class MonochromePolarChartComponent {

    constructor(
        private monochromePolarChartService: MonochromePolarChartService
    ) {}

    ngOnInit(): void {
        this.monochromePolarChartService.loadChart();
    }

}