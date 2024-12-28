import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-total-shipment',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './total-shipment.component.html',
    styleUrl: './total-shipment.component.scss'
})
export class TotalShipmentComponent {}