import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RevenueService } from './revenue.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-revenue',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './revenue.component.html',
    styleUrl: './revenue.component.scss'
})
export class RevenueComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private revenueService: RevenueService
    ) {}

    ngOnInit(): void {
        this.revenueService.loadChart();
    }

}