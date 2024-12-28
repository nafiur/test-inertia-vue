import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { LeadConversionService } from './lead-conversion.service';

@Component({
    selector: 'app-lead-conversion:not(1)',
    standalone: true,
    imports: [RouterLink, MatCardModule],
    templateUrl: './lead-conversion.component.html',
    styleUrl: './lead-conversion.component.scss'
})
export class LeadConversionComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private leadConversionService: LeadConversionService
    ) {}

    ngOnInit(): void {
        this.leadConversionService.loadChart();
    }

}