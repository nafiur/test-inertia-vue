import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CriticalPatientsService } from './critical-patients.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-critical-patients',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './critical-patients.component.html',
    styleUrl: './critical-patients.component.scss'
})
export class CriticalPatientsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private criticalPatientsService: CriticalPatientsService
    ) {}

    ngOnInit(): void {
        this.criticalPatientsService.loadChart();
    }

}