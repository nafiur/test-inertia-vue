import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-total-order',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './total-order.component.html',
    styleUrl: './total-order.component.scss'
})
export class TotalOrderComponent {}