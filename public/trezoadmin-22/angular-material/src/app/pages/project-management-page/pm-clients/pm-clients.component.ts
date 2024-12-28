import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-pm-clients',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule],
    templateUrl: './pm-clients.component.html',
    styleUrl: './pm-clients.component.scss'
})
export class PmClientsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}