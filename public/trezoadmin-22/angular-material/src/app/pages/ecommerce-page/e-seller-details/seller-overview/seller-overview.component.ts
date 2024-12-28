import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-seller-overview',
    standalone: true,
    imports: [RouterLink, MatCardModule],
    templateUrl: './seller-overview.component.html',
    styleUrl: './seller-overview.component.scss'
})
export class SellerOverviewComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}