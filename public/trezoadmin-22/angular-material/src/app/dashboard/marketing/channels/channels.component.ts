import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-channels',
    standalone: true,
    imports: [MatCardModule, MatProgressBarModule],
    templateUrl: './channels.component.html',
    styleUrl: './channels.component.scss'
})
export class ChannelsComponent {}