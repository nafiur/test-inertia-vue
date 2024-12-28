import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-new-customers-month',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './new-customers-month.component.html',
    styleUrl: './new-customers-month.component.scss'
})
export class NewCustomersMonthComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}