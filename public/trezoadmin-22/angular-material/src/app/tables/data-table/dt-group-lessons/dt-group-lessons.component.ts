import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-dt-group-lessons',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule],
    templateUrl: './dt-group-lessons.component.html',
    styleUrl: './dt-group-lessons.component.scss'
})
export class DtGroupLessonsComponent {

    displayedColumns: string[] = ['group', 'link'];
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
    group: any;
    link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        group: {
            images: [
                {
                    img: 'images/users/user20.jpg'
                },
                {
                    img: 'images/users/user21.jpg'
                },
                {
                    img: 'images/users/user6.jpg'
                }
            ],
            name: 'Digital Marketing',
            date: '15 March 2024'
        },
        link: 'arrow_outward'
    },
    {
        group: {
            images: [
                {
                    img: 'images/users/user22.jpg'
                },
                {
                    img: 'images/users/user23.jpg'
                },
                {
                    img: 'images/users/user24.jpg'
                }
            ],
            name: 'Web Development',
            date: '10 March 2024'
        },
        link: 'arrow_outward'
    },
    {
        group: {
            images: [
                {
                    img: 'images/users/user25.jpg'
                },
                {
                    img: 'images/users/user26.jpg'
                },
                {
                    img: 'images/users/user27.jpg'
                }
            ],
            name: 'UX/UI Design',
            date: '05 March 2024'
        },
        link: 'arrow_outward'
    },
    {
        group: {
            images: [
                {
                    img: 'images/users/user28.jpg'
                },
                {
                    img: 'images/users/user29.jpg'
                },
                {
                    img: 'images/users/user30.jpg'
                }
            ],
            name: 'Content Writer',
            date: '02 March 2024'
        },
        link: 'arrow_outward'
    },
    {
        group: {
            images: [
                {
                    img: 'images/users/user28.jpg'
                },
                {
                    img: 'images/users/user29.jpg'
                },
                {
                    img: 'images/users/user30.jpg'
                }
            ],
            name: 'Content Writer',
            date: '02 March 2024'
        },
        link: 'arrow_outward'
    },
    {
        group: {
            images: [
                {
                    img: 'images/users/user25.jpg'
                },
                {
                    img: 'images/users/user26.jpg'
                },
                {
                    img: 'images/users/user27.jpg'
                }
            ],
            name: 'UX/UI Design',
            date: '05 March 2024'
        },
        link: 'arrow_outward'
    },
    {
        group: {
            images: [
                {
                    img: 'images/users/user22.jpg'
                },
                {
                    img: 'images/users/user23.jpg'
                },
                {
                    img: 'images/users/user24.jpg'
                }
            ],
            name: 'Web Development',
            date: '10 March 2024'
        },
        link: 'arrow_outward'
    },
    {
        group: {
            images: [
                {
                    img: 'images/users/user20.jpg'
                },
                {
                    img: 'images/users/user21.jpg'
                },
                {
                    img: 'images/users/user6.jpg'
                }
            ],
            name: 'Digital Marketing',
            date: '15 March 2024'
        },
        link: 'arrow_outward'
    }
];