import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-fp-widgets',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './fp-widgets.component.html',
    styleUrl: './fp-widgets.component.scss'
})
export class FpWidgetsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}