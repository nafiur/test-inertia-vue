import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { PatientByAgeService } from './patient-by-age.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-patient-by-age',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './patient-by-age.component.html',
    styleUrl: './patient-by-age.component.scss'
})
export class PatientByAgeComponent {

    selectedTimeframe: string = 'Last Week'; // Default dropdown text
    dataMap: { [key: string]: number[] } = {
        'Last Day': [20, 30, 25, 25],
        'Last Week': [30, 40, 20, 10],
        'Last Month': [25, 35, 25, 15],
        'Last Year': [35, 30, 20, 15]
    };

    constructor(
        public themeService: CustomizerSettingsService,
        private patientByAgeService: PatientByAgeService
    ) {}

    ngOnInit(): void {
        // Load the default chart data
        const defaultData = this.dataMap[this.selectedTimeframe];
        this.patientByAgeService.loadChart(defaultData);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update dropdown text
        const updatedData = this.dataMap[timeframe];
        this.patientByAgeService.updateChartData(updatedData);
    }

}