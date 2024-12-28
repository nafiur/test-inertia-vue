import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TotalSalesComponent } from './total-sales/total-sales.component';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
import { TotalProfitComponent } from './total-profit/total-profit.component';
import { TotalRevenueComponent } from './total-revenue/total-revenue.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, TotalSalesComponent, TotalOrdersComponent, TotalProfitComponent, TotalRevenueComponent, MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule],
    providers: [provideNativeDateAdapter()],
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss'
})
export class StatsComponent {

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
        public themeService: CustomizerSettingsService
    ) {}

}