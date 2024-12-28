import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-cost-per-click',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './cost-per-click.component.html',
    styleUrl: './cost-per-click.component.scss'
})
export class CostPerClickComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}