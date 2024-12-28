import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-shipment-list',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule],
    templateUrl: './shipment-list.component.html',
    styleUrl: './shipment-list.component.scss'
})
export class ShipmentListComponent {

    displayedColumns: string[] = ['shipmentID', 'customerName', 'products', 'cost', 'shipDate', 'origin', 'shipmentMethod', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}

export interface PeriodicElement {
    shipmentID: string;
    customerName: any;
    products: string;
    cost: string;
    shipDate: string;
    origin: string;
    shipmentMethod: string;
    status: any;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        shipmentID: '#0015',
        customerName: {
            img: 'images/users/user54.jpg',
            name: 'David Farrior'
        },
        products: 'Toys',
        cost: '$50,000',
        shipDate: '30 Apr 2024',
        origin: 'New York, USA',
        shipmentMethod: 'Air',
        status: {
            delivered: true,
            inTransit: false,
            onTheWay: false,
            cancelled: false,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        shipmentID: '#0099',
        customerName: {
            img: 'images/users/user55.jpg',
            name: 'Leslie Yawn'
        },
        products: 'Sports',
        cost: '$1,20,000',
        shipDate: '29 Apr 2024',
        origin: 'Shanghai, China',
        shipmentMethod: 'Sea',
        status: {
            delivered: false,
            inTransit: true,
            onTheWay: false,
            cancelled: false,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        shipmentID: '#0145',
        customerName: {
            img: 'images/users/user59.jpg',
            name: 'Willie Wood'
        },
        products: 'Fashion',
        cost: '$35,000',
        shipDate: '28 Apr 2024',
        origin: 'Berlin, Germany',
        shipmentMethod: 'Road',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: true,
            cancelled: false,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        shipmentID: '#0247',
        customerName: {
            img: 'images/users/user51.jpg',
            name: 'Jill Caldera'
        },
        products: 'Food',
        cost: '$80,000',
        shipDate: '27 Apr 2024',
        origin: 'Tokyo, Japan',
        shipmentMethod: 'Air',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: false,
            cancelled: true,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        shipmentID: '#0299',
        customerName: {
            img: 'images/users/user43.jpg',
            name: 'Bill Mitchell'
        },
        products: 'Electronics',
        cost: '$1,50,000',
        shipDate: '26 Apr 2024',
        origin: 'Madrid, Spain',
        shipmentMethod: 'Sea',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: false,
            cancelled: false,
            pending: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        shipmentID: '#0299',
        customerName: {
            img: 'images/users/user43.jpg',
            name: 'Bill Mitchell'
        },
        products: 'Electronics',
        cost: '$1,50,000',
        shipDate: '26 Apr 2024',
        origin: 'Madrid, Spain',
        shipmentMethod: 'Sea',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: false,
            cancelled: false,
            pending: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        shipmentID: '#0247',
        customerName: {
            img: 'images/users/user51.jpg',
            name: 'Jill Caldera'
        },
        products: 'Food',
        cost: '$80,000',
        shipDate: '27 Apr 2024',
        origin: 'Tokyo, Japan',
        shipmentMethod: 'Air',
        status: {
            delivered: true,
            inTransit: false,
            onTheWay: false,
            cancelled: false,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        shipmentID: '#0099',
        customerName: {
            img: 'images/users/user55.jpg',
            name: 'Leslie Yawn'
        },
        products: 'Sports',
        cost: '$1,20,000',
        shipDate: '29 Apr 2024',
        origin: 'Shanghai, China',
        shipmentMethod: 'Sea',
        status: {
            delivered: false,
            inTransit: true,
            onTheWay: false,
            cancelled: false,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        shipmentID: '#0145',
        customerName: {
            img: 'images/users/user59.jpg',
            name: 'Willie Wood'
        },
        products: 'Fashion',
        cost: '$35,000',
        shipDate: '28 Apr 2024',
        origin: 'Berlin, Germany',
        shipmentMethod: 'Road',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: true,
            cancelled: false,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        shipmentID: '#0015',
        customerName: {
            img: 'images/users/user54.jpg',
            name: 'David Farrior'
        },
        products: 'Toys',
        cost: '$50,000',
        shipDate: '30 Apr 2024',
        origin: 'New York, USA',
        shipmentMethod: 'Air',
        status: {
            delivered: true,
            inTransit: false,
            onTheWay: false,
            cancelled: false,
            pending: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];