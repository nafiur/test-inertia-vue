import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-cost-per-thousand',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './cost-per-thousand.component.html',
    styleUrl: './cost-per-thousand.component.scss'
})
export class CostPerThousandComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}