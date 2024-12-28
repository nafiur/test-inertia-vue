import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TotalRevenueService } from './total-revenue.service';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-total-revenue',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './total-revenue.component.html',
    styleUrl: './total-revenue.component.scss'
})
export class TotalRevenueComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private totalRevenueService: TotalRevenueService
    ) {}

    ngOnInit(): void {
        this.totalRevenueService.loadChart();
    }

}