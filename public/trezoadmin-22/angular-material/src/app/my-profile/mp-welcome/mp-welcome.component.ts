import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-mp-welcome',
    standalone: true,
    imports: [RouterLink, MatCardModule],
    templateUrl: './mp-welcome.component.html',
    styleUrl: './mp-welcome.component.scss'
})
export class MpWelcomeComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}