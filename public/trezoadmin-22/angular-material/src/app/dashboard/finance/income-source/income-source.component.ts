import { Component } from '@angular/core';
import { IncomeSourceService } from './income-source.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-income-source',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './income-source.component.html',
    styleUrl: './income-source.component.scss'
})
export class IncomeSourceComponent {

    constructor(
        private incomeSourceService: IncomeSourceService
    ) {}

    ngOnInit(): void {
        this.incomeSourceService.loadChart();
    }

}