import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-most-popular-sellers',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule],
    templateUrl: './most-popular-sellers.component.html',
    styleUrl: './most-popular-sellers.component.scss'
})
export class MostPopularSellersComponent {

    displayedColumns: string[] = ['seller', 'deliveries', 'earnings', 'ratings', 'view'];
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
    seller: any;
    deliveries: number;
    earnings: string;
    ratings: any;
    view: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        seller: {
            img: 'images/users/user58.jpg',
            name: 'Johhna Loren',
            location: 'Queensland'
        },
        deliveries: 6240,
        earnings: '624 ETH',
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                }
            ],
            number: '5.0'
        },
        view: '.'
    },
    {
        seller: {
            img: 'images/users/user53.jpg',
            name: 'Skyler White',
            location: 'Neverdies'
        },
        deliveries: 5135,
        earnings: '597 ETH',
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-half-fill'
                }
            ],
            number: '4.5'
        },
        view: '.'
    },
    {
        seller: {
            img: 'images/users/user37.jpg',
            name: 'Jonathon Watson',
            location: 'Emoticons'
        },
        deliveries: 4321,
        earnings: '413 ETH',
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-line'
                }
            ],
            number: '4.0'
        },
        view: '.'
    },
    {
        seller: {
            img: 'images/users/user36.jpg',
            name: 'Walter White',
            location: 'Puzzleworld'
        },
        deliveries: 3124,
        earnings: '321 ETH',
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-half-fill'
                },
                {
                    star: 'ri-star-line'
                }
            ],
            number: '3.5'
        },
        view: '.'
    },
    {
        seller: {
            img: 'images/users/user30.jpg',
            name: 'David Carlen',
            location: 'Liveslong'
        },
        deliveries: 2137,
        earnings: '246 ETH',
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                }
            ],
            number: '5.0'
        },
        view: '.'
    },
    {
        seller: {
            img: 'images/users/user30.jpg',
            name: 'David Carlen',
            location: 'Liveslong'
        },
        deliveries: 2137,
        earnings: '246 ETH',
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                }
            ],
            number: '5.0'
        },
        view: '.'
    },
    {
        seller: {
            img: 'images/users/user58.jpg',
            name: 'Johhna Loren',
            location: 'Queensland'
        },
        deliveries: 6240,
        earnings: '624 ETH',
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                }
            ],
            number: '5.0'
        },
        view: '.'
    },
    {
        seller: {
            img: 'images/users/user53.jpg',
            name: 'Skyler White',
            location: 'Neverdies'
        },
        deliveries: 5135,
        earnings: '597 ETH',
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-half-fill'
                }
            ],
            number: '4.5'
        },
        view: '.'
    },
    {
        seller: {
            img: 'images/users/user37.jpg',
            name: 'Jonathon Watson',
            location: 'Emoticons'
        },
        deliveries: 4321,
        earnings: '413 ETH',
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-line'
                }
            ],
            number: '4.0'
        },
        view: '.'
    },
    {
        seller: {
            img: 'images/users/user36.jpg',
            name: 'Walter White',
            location: 'Puzzleworld'
        },
        deliveries: 3124,
        earnings: '321 ETH',
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-half-fill'
                },
                {
                    star: 'ri-star-line'
                }
            ],
            number: '3.5'
        },
        view: '.'
    }
];