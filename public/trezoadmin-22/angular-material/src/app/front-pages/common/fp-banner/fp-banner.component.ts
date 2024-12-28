import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-fp-banner',
    standalone: true,
    imports: [RouterLink, MatButtonModule],
    templateUrl: './fp-banner.component.html',
    styleUrl: './fp-banner.component.scss'
})
export class FpBannerComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}