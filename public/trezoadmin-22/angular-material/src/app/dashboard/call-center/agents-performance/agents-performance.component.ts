import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-agents-performance',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatProgressBarModule, NgIf],
    templateUrl: './agents-performance.component.html',
    styleUrl: './agents-performance.component.scss'
})
export class AgentsPerformanceComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    displayedColumns: string[] = ['caller', 'avgCallDuration', 'fcr', 'csat'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

}

export interface PeriodicElement {
    caller: any;
    avgCallDuration: string;
    fcr: string;
    csat: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        caller: {
            img: 'images/users/user62.jpg',
            name: 'Sarah Davis',
            numberOfTimeCalls: '65 Calls',
            status: {
                online: true,
                offline: false
            }
        },
        avgCallDuration: '4 mins 10 secs',
        fcr: '85%',
        csat: '90%',
    },
    {
        caller: {
            img: 'images/users/user63.jpg',
            name: 'Michael Brown',
            numberOfTimeCalls: '58 Calls',
            status: {
                online: false,
                offline: true
            }
        },
        avgCallDuration: '5 mins 20 secs',
        fcr: '82%',
        csat: '87%'
    },
    {
        caller: {
            img: 'images/users/user64.jpg',
            name: 'Emily Johnson',
            numberOfTimeCalls: '72 Calls',
            status: {
                online: true,
                offline: false
            }
        },
        avgCallDuration: '4 mins 30 secs',
        fcr: '88%',
        csat: '90%'
    },
    {
        caller: {
            img: 'images/users/user65.jpg',
            name: 'David Lee',
            numberOfTimeCalls: '53 Calls',
            status: {
                online: false,
                offline: true
            }
        },
        avgCallDuration: '3 mins 50 secs',
        fcr: '80%',
        csat: '85%'
    }
];