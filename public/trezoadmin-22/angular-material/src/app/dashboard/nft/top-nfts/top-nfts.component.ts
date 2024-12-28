import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-top-nfts',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, NgIf],
    templateUrl: './top-nfts.component.html',
    styleUrl: './top-nfts.component.scss'
})
export class TopNftsComponent {

    displayedColumns: string[] = ['nft', 'volumn', 'flowPrice', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}

export interface PeriodicElement {
    nft: any;
    volumn: number;
    flowPrice: string;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        nft: {
            img: 'images/nfts/top1.gif',
            name: 'Sky Bird',
            seller: '@queensland'
        },
        volumn: 6240,
        flowPrice: '624 ETH',
        status: {
            green: true,
            greenText: '+5.4%',
            red: false,
            redText: '+5.4%'
        }
    },
    {
        nft: {
            img: 'images/nfts/top2.gif',
            name: 'Walking Brain',
            seller: '@neverdies'
        },
        volumn: 5135,
        flowPrice: '597 ETH',
        status: {
            green: false,
            greenText: '-3.2%',
            red: true,
            redText: '-3.2%'
        }
    },
    {
        nft: {
            img: 'images/nfts/top3.gif',
            name: 'Flying Flower',
            seller: '@emoticons'
        },
        volumn: 4321,
        flowPrice: '413 ETH',
        status: {
            green: true,
            greenText: '+2.5%',
            red: false,
            redText: '+2.5%'
        }
    },
    {
        nft: {
            img: 'images/nfts/top4.gif',
            name: 'Living Robot',
            seller: '@puzzleworld'
        },
        volumn: 3124,
        flowPrice: '321 ETH',
        status: {
            green: false,
            greenText: '-1.5%',
            red: true,
            redText: '-1.5%'
        }
    },
    {
        nft: {
            img: 'images/nfts/top5.gif',
            name: 'Thumbs Up',
            seller: '@liveslong'
        },
        volumn: 2137,
        flowPrice: '246 ETH',
        status: {
            green: true,
            greenText: '+5.4%',
            red: false,
            redText: '+5.4%'
        }
    }
];