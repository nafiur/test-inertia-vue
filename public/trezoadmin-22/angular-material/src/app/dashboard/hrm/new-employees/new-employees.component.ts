import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NewEmployeesService } from './new-employees.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-new-employees',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './new-employees.component.html',
    styleUrl: './new-employees.component.scss'
})
export class NewEmployeesComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private newEmployeesService: NewEmployeesService
    ) {}

    ngOnInit(): void {
        this.newEmployeesService.loadChart();
    }

}