import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-top-countries',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './top-countries.component.html',
    styleUrl: './top-countries.component.scss'
})
export class TopCountriesComponent {}