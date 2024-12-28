import { Component } from '@angular/core';
import { OnTimeDeliveryService } from './on-time-delivery.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-on-time-delivery',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './on-time-delivery.component.html',
    styleUrl: './on-time-delivery.component.scss'
})
export class OnTimeDeliveryComponent {

    constructor(
        private onTimeDeliveryService: OnTimeDeliveryService
    ) {}

    ngOnInit(): void {
        this.onTimeDeliveryService.loadChart();
    }

}