import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-most-sales-location',
    standalone: true,
    imports: [MatCardModule, MatProgressBarModule, MatButtonModule, MatMenuModule],
    templateUrl: './most-sales-location.component.html',
    styleUrl: './most-sales-location.component.scss'
})
export class MostSalesLocationComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}