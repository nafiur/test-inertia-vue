import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TodaysShipmentsService } from './todays-shipments.service';

@Component({
    selector: 'app-todays-shipments',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './todays-shipments.component.html',
    styleUrl: './todays-shipments.component.scss'
})
export class TodaysShipmentsComponent {

    constructor(
        private todaysShipmentsService: TodaysShipmentsService
    ) {}

    ngOnInit(): void {
        this.todaysShipmentsService.loadChart();
    }

}