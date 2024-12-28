import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ShipmentDeliveredService } from './shipment-delivered.service';

@Component({
    selector: 'app-shipment-delivered',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './shipment-delivered.component.html',
    styleUrl: './shipment-delivered.component.scss'
})
export class ShipmentDeliveredComponent {

    constructor(
        private shipmentDeliveredService: ShipmentDeliveredService
    ) {}

    ngOnInit(): void {
        this.shipmentDeliveredService.loadChart();
    }

}