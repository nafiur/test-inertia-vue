import { Component } from '@angular/core';
import { LiveShipmentStatusService } from './live-shipment-status.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-live-shipment-status',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './live-shipment-status.component.html',
    styleUrl: './live-shipment-status.component.scss'
})
export class LiveShipmentStatusComponent {

    constructor(
        private liveShipmentStatusService: LiveShipmentStatusService
    ) {}

    ngOnInit(): void {
        this.liveShipmentStatusService.loadChart();
    }

}