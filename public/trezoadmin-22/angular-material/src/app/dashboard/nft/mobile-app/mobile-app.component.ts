import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-mobile-app',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './mobile-app.component.html',
    styleUrl: './mobile-app.component.scss'
})
export class MobileAppComponent {}