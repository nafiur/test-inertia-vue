import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-teachers',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, RouterLink, MatTableModule],
    templateUrl: './teachers.component.html',
    styleUrl: './teachers.component.scss'
})
export class TeachersComponent {

    displayedColumns: string[] = ['name', 'subject'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}

export interface PeriodicElement {
    name: any;
    subject: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        name: {
            img: 'images/users/user53.jpg',
            name: 'Sarah W.',
            email: 'sarah@trezo.com'
        },
        subject: 'Mathematics'
    },
    {
        name: {
            img: 'images/users/user54.jpg',
            name: 'Michael T.',
            email: 'michael@trezo.com'
        },
        subject: 'English'
    },
    {
        name: {
            img: 'images/users/user55.jpg',
            name: 'Emily J.',
            email: 'emily@trezo.com'
        },
        subject: 'History'
    },
    {
        name: {
            img: 'images/users/user56.jpg',
            name: 'David A.',
            email: 'david@trezo.com'
        },
        subject: 'Art'
    },
    {
        name: {
            img: 'images/users/user57.jpg',
            name: 'Jessica M.',
            email: 'jessica@trezo.com'
        },
        subject: 'Music'
    }
];