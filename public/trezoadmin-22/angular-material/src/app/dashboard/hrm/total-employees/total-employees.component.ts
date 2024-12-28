import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TotalEmployeesService } from './total-employees.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-total-employees',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './total-employees.component.html',
    styleUrl: './total-employees.component.scss'
})
export class TotalEmployeesComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private totalEmployeesService: TotalEmployeesService
    ) {}

    ngOnInit(): void {
        this.totalEmployeesService.loadChart();
    }

}