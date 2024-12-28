import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-click-through-rate',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './click-through-rate.component.html',
    styleUrl: './click-through-rate.component.scss'
})
export class ClickThroughRateComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}