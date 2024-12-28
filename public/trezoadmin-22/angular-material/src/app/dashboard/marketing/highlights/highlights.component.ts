import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-highlights',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './highlights.component.html',
    styleUrl: './highlights.component.scss'
})
export class HighlightsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}