import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-active-auctions',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule],
    templateUrl: './active-auctions.component.html',
    styleUrl: './active-auctions.component.scss'
})
export class ActiveAuctionsComponent {

    displayedColumns: string[] = ['item', 'openPrice', 'yourOffer', 'recentOffer', 'timeLeft', 'view'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}

export interface PeriodicElement {
    item: any;
    openPrice: string;
    yourOffer: string;
    timeLeft: string;
    recentOffer: any;
    view: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        item: {
            img: 'images/nfts/auction1.gif',
            name: 'Christmas Eve',
            author: 'John Lira'
        },
        openPrice: '11.75 ETH',
        yourOffer: '10.00 ETH',
        recentOffer: {
            img: `images/users/user58.jpg`,
            offer: `10.00 ETH`
        },
        timeLeft: '02h 44m 57s',
        view: '.'
    },
    {
        item: {
            img: 'images/nfts/auction2.gif',
            name: 'Rotating Flower',
            author: 'WalterW.'
        },
        openPrice: '9.25 ETH',
        yourOffer: '6.10 ETH',
        recentOffer: {
            img: `images/users/user59.jpg`,
            offer: `7.15 ETH`
        },
        timeLeft: '01h 20m 58s',
        view: '.'
    },
    {
        item: {
            img: 'images/nfts/auction3.jpg',
            name: 'Windows Art',
            author: 'Christino'
        },
        openPrice: '17.24 ETH',
        yourOffer: '11.75 ETH',
        recentOffer: {
            img: `images/users/user60.jpg`,
            offer: `14.11 ETH`
        },
        timeLeft: '42m 58s',
        view: '.'
    },
    {
        item: {
            img: 'images/nfts/auction4.jpg',
            name: '3D Logo',
            author: 'Hater'
        },
        openPrice: '12.12 ETH',
        yourOffer: '10.24 ETH',
        recentOffer: {
            img: `images/users/user61.jpg`,
            offer: `12.08 ETH`
        },
        timeLeft: '01h 50m 00s',
        view: '.'
    },
    {
        item: {
            img: 'images/nfts/auction5.jpg',
            name: 'Awesome Bird',
            author: 'Liveslong'
        },
        openPrice: '8.15 ETH',
        yourOffer: '7.15 ETH',
        recentOffer: {
            img: `images/users/user62.jpg`,
            offer: `8.08 ETH`
        },
        timeLeft: '04h 14m 58s',
        view: '.'
    },
    {
        item: {
            img: 'images/nfts/auction4.jpg',
            name: '3D Logo',
            author: 'Hater'
        },
        openPrice: '12.12 ETH',
        yourOffer: '10.24 ETH',
        recentOffer: {
            img: `images/users/user61.jpg`,
            offer: `12.08 ETH`
        },
        timeLeft: '01h 50m 00s',
        view: '.'
    },
    {
        item: {
            img: 'images/nfts/auction3.jpg',
            name: 'Windows Art',
            author: 'Christino'
        },
        openPrice: '17.24 ETH',
        yourOffer: '11.75 ETH',
        recentOffer: {
            img: `images/users/user60.jpg`,
            offer: `14.11 ETH`
        },
        timeLeft: '42m 58s',
        view: '.'
    },
    {
        item: {
            img: 'images/nfts/auction2.gif',
            name: 'Rotating Flower',
            author: 'WalterW.'
        },
        openPrice: '9.25 ETH',
        yourOffer: '6.10 ETH',
        recentOffer: {
            img: `images/users/user59.jpg`,
            offer: `7.15 ETH`
        },
        timeLeft: '01h 20m 58s',
        view: '.'
    },
    {
        item: {
            img: 'images/nfts/auction5.jpg',
            name: 'Awesome Bird',
            author: 'Liveslong'
        },
        openPrice: '8.15 ETH',
        yourOffer: '7.15 ETH',
        recentOffer: {
            img: `images/users/user62.jpg`,
            offer: `8.08 ETH`
        },
        timeLeft: '04h 14m 58s',
        view: '.'
    },
    {
        item: {
            img: 'images/nfts/auction1.gif',
            name: 'Christmas Eve',
            author: 'John Lira'
        },
        openPrice: '11.75 ETH',
        yourOffer: '10.00 ETH',
        recentOffer: {
            img: `images/users/user58.jpg`,
            offer: `10.00 ETH`
        },
        timeLeft: '02h 44m 57s',
        view: '.'
    }
];