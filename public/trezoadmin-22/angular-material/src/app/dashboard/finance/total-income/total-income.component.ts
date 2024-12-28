import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-total-income',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './total-income.component.html',
    styleUrl: './total-income.component.scss'
})
export class TotalIncomeComponent {}