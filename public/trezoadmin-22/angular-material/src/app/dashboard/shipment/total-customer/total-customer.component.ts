import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-total-customer',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './total-customer.component.html',
    styleUrl: './total-customer.component.scss'
})
export class TotalCustomerComponent {}