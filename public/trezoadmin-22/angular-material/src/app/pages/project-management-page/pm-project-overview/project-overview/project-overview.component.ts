import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-project-overview',
    standalone: true,
    imports: [RouterLink, MatCardModule],
    templateUrl: './project-overview.component.html',
    styleUrl: './project-overview.component.scss'
})
export class ProjectOverviewComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}