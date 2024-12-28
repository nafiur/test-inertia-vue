import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TicketsDueService } from './tickets-due.service';

@Component({
    selector: 'app-tickets-due',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './tickets-due.component.html',
    styleUrl: './tickets-due.component.scss'
})
export class TicketsDueComponent {

    constructor(
        private ticketsDueService: TicketsDueService
    ) {}

    ngOnInit(): void {
        this.ticketsDueService.loadChart();
    }

}