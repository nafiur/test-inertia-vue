import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-sales-by-country',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatProgressBarModule],
    templateUrl: './sales-by-country.component.html',
    styleUrl: './sales-by-country.component.scss'
})
export class SalesByCountryComponent {}