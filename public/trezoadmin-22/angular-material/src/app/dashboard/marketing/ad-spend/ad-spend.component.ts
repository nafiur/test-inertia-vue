import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-ad-spend',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './ad-spend.component.html',
    styleUrl: './ad-spend.component.scss'
})
export class AdSpendComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}