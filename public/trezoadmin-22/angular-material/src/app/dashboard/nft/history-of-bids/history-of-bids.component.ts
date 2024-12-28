import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-history-of-bids',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule],
    templateUrl: './history-of-bids.component.html',
    styleUrl: './history-of-bids.component.scss'
})
export class HistoryOfBidsComponent {

    displayedColumns: string[] = ['user', 'price'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}

export interface PeriodicElement {
    user: any;
    price: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        user: {
            img: 'images/users/user6.jpg',
            name: 'Johhna Loren',
            username: '@queensland'
        },
        price: '624 ETH',
    },
    {
        user: {
            img: 'images/users/user7.jpg',
            name: 'Zara Loren',
            username: '@neverdies'
        },
        price: '121.1 ETH',
    },
    {
        user: {
            img: 'images/users/user8.jpg',
            name: 'Walter White',
            username: '@emoticons'
        },
        price: '72.78 ETH',
    },
    {
        user: {
            img: 'images/users/user9.jpg',
            name: 'Viktor James',
            username: '@puzzleworld'
        },
        price: '25.8 ETH',
    },
    {
        user: {
            img: 'images/users/user10.jpg',
            name: 'Zinia Loren',
            username: '@liveslong'
        },
        price: '12 ETH',
    },
    {
        user: {
            img: 'images/users/user8.jpg',
            name: 'Walter White',
            username: '@emoticons'
        },
        price: '11.2 ETH',
    },
    {
        user: {
            img: 'images/users/user9.jpg',
            name: 'Viktor James',
            username: '@puzzleworld'
        },
        price: '10.5 ETH',
    }
];