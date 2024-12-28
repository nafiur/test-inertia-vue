import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-e-order-tracking',
    standalone: true,
    imports: [RouterLink, MatCardModule],
    templateUrl: './e-order-tracking.component.html',
    styleUrl: './e-order-tracking.component.scss'
})
export class EOrderTrackingComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}