import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { GrossEarningsService } from './gross-earnings.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-gross-earnings',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './gross-earnings.component.html',
    styleUrl: './gross-earnings.component.scss'
})
export class GrossEarningsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private grossEarningsService: GrossEarningsService
    ) {}

    ngOnInit(): void {
        this.grossEarningsService.loadChart();
    }

}