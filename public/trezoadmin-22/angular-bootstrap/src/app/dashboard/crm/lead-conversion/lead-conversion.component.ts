import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { LeadConversionService } from './lead-conversion.service';

@Component({
    selector: 'app-lead-conversion',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './lead-conversion.component.html',
    styleUrl: './lead-conversion.component.scss'
})
export class LeadConversionComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private leadConversionService: LeadConversionService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        this.leadConversionService.loadChart();
    }

}