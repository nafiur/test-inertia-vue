import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { PatientsLast7DaysService } from './patients-last-7-days.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-patients-last-7-days',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './patients-last-7-days.component.html',
    styleUrl: './patients-last-7-days.component.scss'
})
export class PatientsLast7DaysComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private patientsLast7DaysService: PatientsLast7DaysService
    ) {}

    ngOnInit(): void {
        this.patientsLast7DaysService.loadChart();
    }

}