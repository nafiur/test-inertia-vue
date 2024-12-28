import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-mp-profile-intro',
    standalone: true,
    imports: [RouterLink, MatCardModule],
    templateUrl: './mp-profile-intro.component.html',
    styleUrl: './mp-profile-intro.component.scss'
})
export class MpProfileIntroComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}