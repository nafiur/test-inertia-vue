import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-projects-overview',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './projects-overview.component.html',
    styleUrl: './projects-overview.component.scss'
})
export class ProjectsOverviewComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}