import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { PriceStatisticsService } from './price-statistics.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-price-statistics',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './price-statistics.component.html',
    styleUrl: './price-statistics.component.scss'
})
export class PriceStatisticsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private priceStatisticsService: PriceStatisticsService
    ) {}

    ngOnInit(): void {
        this.priceStatisticsService.loadChart();
    }

}