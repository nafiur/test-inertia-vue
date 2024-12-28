import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { OverallVisitorsService } from './overall-visitors.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-overall-visitors',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './overall-visitors.component.html',
    styleUrl: './overall-visitors.component.scss'
})
export class OverallVisitorsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private overallVisitorsService: OverallVisitorsService
    ) {}

    ngOnInit(): void {
        this.overallVisitorsService.loadChart();
    }

}