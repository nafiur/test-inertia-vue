import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { TotalEarningsService } from './total-earnings.service';

@Component({
    selector: 'app-hospital-earnings',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './hospital-earnings.component.html',
    styleUrl: './hospital-earnings.component.scss'
})
export class HospitalEarningsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private totalEarningsService: TotalEarningsService
    ) {}

    ngOnInit(): void {
        this.totalEarningsService.loadChart();
    }

}