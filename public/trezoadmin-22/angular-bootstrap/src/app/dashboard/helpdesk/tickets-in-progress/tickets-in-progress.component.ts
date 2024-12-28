import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TicketsInProgressService } from './tickets-in-progress.service';

@Component({
    selector: 'app-tickets-in-progress',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './tickets-in-progress.component.html',
    styleUrl: './tickets-in-progress.component.scss'
})
export class TicketsInProgressComponent {

    constructor(
        private ticketsInProgressService: TicketsInProgressService
    ) {}

    ngOnInit(): void {
        this.ticketsInProgressService.loadChart();
    }

}