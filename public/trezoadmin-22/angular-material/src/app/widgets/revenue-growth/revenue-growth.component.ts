import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RevenueGrowthService } from './revenue-growth.service';

@Component({
    selector: 'app-revenue-growth:not(1)',
    standalone: true,
    imports: [RouterLink, MatCardModule],
    templateUrl: './revenue-growth.component.html',
    styleUrl: './revenue-growth.component.scss'
})
export class RevenueGrowthComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private revenueGrowthService: RevenueGrowthService
    ) {}

    ngOnInit(): void {
        this.revenueGrowthService.loadChart();
    }

}