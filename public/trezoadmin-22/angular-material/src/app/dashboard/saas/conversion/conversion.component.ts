import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ConversionService } from './conversion.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-conversion',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './conversion.component.html',
    styleUrl: './conversion.component.scss'
})
export class ConversionComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private conversionService: ConversionService
    ) {}

    ngOnInit(): void {
        this.conversionService.loadChart();
    }

}