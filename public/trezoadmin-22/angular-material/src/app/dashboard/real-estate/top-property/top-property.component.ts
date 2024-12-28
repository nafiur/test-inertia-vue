import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-top-property',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, RouterLink],
    templateUrl: './top-property.component.html',
    styleUrl: './top-property.component.scss'
})
export class TopPropertyComponent {}