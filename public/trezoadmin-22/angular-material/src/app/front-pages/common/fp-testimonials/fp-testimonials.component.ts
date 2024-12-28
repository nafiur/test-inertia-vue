import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-fp-testimonials',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './fp-testimonials.component.html',
    styleUrl: './fp-testimonials.component.scss'
})
export class FpTestimonialsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}