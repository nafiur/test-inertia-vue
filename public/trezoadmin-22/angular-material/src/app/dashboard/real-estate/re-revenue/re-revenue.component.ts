import { Component } from '@angular/core';
import { ReRevenueService } from './re-revenue.service';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-re-revenue',
	standalone: true,
	imports: [MatCardModule],
	templateUrl: './re-revenue.component.html',
	styleUrl: './re-revenue.component.scss'
})
export class ReRevenueComponent {

	constructor(
		private reRevenueService: ReRevenueService
	) {}

	ngOnInit(): void {
		this.reRevenueService.loadChart();
	}

}