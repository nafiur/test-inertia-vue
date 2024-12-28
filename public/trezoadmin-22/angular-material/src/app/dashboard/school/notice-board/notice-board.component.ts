import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-notice-board',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, RouterLink, MatTableModule],
    templateUrl: './notice-board.component.html',
    styleUrl: './notice-board.component.scss'
})
export class NoticeBoardComponent {

    displayedColumns: string[] = ['notice', 'link'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}

export interface PeriodicElement {
    notice: any;
    link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        notice: {
            img: 'images/icons/note.svg',
            title: 'Science Fair Registration',
            desc: 'Registration for the annual Science Fair',
            date: 'October 28, 2024'
        },
        link: 'arrow_outward'
    },
    {
        notice: {
            img: 'images/icons/video-chat.svg',
            title: 'Parent-Teacher Meeting',
            desc: 'The Parent-Teacher meeting for Term 1 will take place',
            date: 'November 1, 2024'
        },
        link: 'arrow_outward'
    },
    {
        notice: {
            img: 'images/icons/ball.svg',
            title: 'Winter Sports Tryouts',
            desc: 'Tryouts for the winter sports teams will begin on',
            date: 'November 12, 2024'
        },
        link: 'arrow_outward'
    },
    {
        notice: {
            img: 'images/icons/celebration.svg',
            title: 'School Holiday Reminder',
            desc: 'A reminder that school will be closed on November',
            date: 'November 28, 2024'
        },
        link: 'arrow_outward'
    }
];