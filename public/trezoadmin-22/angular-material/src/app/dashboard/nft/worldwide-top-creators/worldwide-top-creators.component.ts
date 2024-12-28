import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-worldwide-top-creators',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatProgressBarModule],
    templateUrl: './worldwide-top-creators.component.html',
    styleUrl: './worldwide-top-creators.component.scss'
})
export class WorldwideTopCreatorsComponent {}