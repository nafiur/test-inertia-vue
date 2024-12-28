import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-external-links',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './external-links.component.html',
    styleUrl: './external-links.component.scss'
})
export class ExternalLinksComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}