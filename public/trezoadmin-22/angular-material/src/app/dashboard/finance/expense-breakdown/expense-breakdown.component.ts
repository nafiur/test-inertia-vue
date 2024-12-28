import { Component } from '@angular/core';
import { ExpenseBreakdownService } from './expense-breakdown.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-expense-breakdown',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './expense-breakdown.component.html',
    styleUrl: './expense-breakdown.component.scss'
})
export class ExpenseBreakdownComponent {

    constructor(
        private expenseBreakdownService: ExpenseBreakdownService
    ) {}

    ngOnInit(): void {
        this.expenseBreakdownService.loadChart();
    }

}