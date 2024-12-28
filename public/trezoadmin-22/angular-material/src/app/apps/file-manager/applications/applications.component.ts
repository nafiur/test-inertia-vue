import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-applications',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatButtonModule, MatCheckboxModule],
    templateUrl: './applications.component.html',
    styleUrl: './applications.component.scss'
})
export class ApplicationsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}