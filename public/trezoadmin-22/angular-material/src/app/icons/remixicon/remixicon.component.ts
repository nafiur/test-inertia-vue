import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-remixicon',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule],
    templateUrl: './remixicon.component.html',
    styleUrl: './remixicon.component.scss'
})
export class RemixiconComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}