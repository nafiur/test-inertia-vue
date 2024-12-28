import { Component } from '@angular/core';
import { CashEndMonthService } from './cash-end-month.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-cash-end-month',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './cash-end-month.component.html',
    styleUrl: './cash-end-month.component.scss'
})
export class CashEndMonthComponent {

    constructor(
        private cashEndMonthService: CashEndMonthService
    ) {}

    ngOnInit(): void {
        this.cashEndMonthService.loadChart();
    }

}