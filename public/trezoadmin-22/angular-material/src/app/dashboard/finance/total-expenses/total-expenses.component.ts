import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-total-expenses',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './total-expenses.component.html',
    styleUrl: './total-expenses.component.scss'
})
export class TotalExpensesComponent {}