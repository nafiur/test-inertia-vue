import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { EmployeeAttendanceTrendsService } from './employee-attendance-trends.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
    selector: 'app-employee-attendance-trends',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule, FormsModule],
    providers: [provideNativeDateAdapter()],
    templateUrl: './employee-attendance-trends.component.html',
    styleUrl: './employee-attendance-trends.component.scss'
})
export class EmployeeAttendanceTrendsComponent {

    // Date Picker
    readonly campaignOne = new FormGroup({
        start: new FormControl(new Date(year, month, 13)),
        end: new FormControl(new Date(year, month, 16)),
    });
    readonly campaignTwo = new FormGroup({
        start: new FormControl(new Date(year, month, 15)),
        end: new FormControl(new Date(year, month, 19)),
    });

    constructor(
        public themeService: CustomizerSettingsService,
        private employeeAttendanceTrendsService: EmployeeAttendanceTrendsService
    ) {}

    ngOnInit(): void {
        this.employeeAttendanceTrendsService.loadChart();
    }

}