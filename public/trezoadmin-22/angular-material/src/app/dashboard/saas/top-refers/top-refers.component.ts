import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-top-refers',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatProgressBarModule],
    templateUrl: './top-refers.component.html',
    styleUrl: './top-refers.component.scss'
})
export class TopRefersComponent {}