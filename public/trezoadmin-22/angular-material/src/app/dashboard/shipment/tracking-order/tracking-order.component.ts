import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-tracking-order',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule],
    templateUrl: './tracking-order.component.html',
    styleUrl: './tracking-order.component.scss'
})
export class TrackingOrderComponent {

    displayedColumns: string[] = ['orderID', 'customerName', 'orderDate', 'currentLocation', 'trackingNumber', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    orderID: string;
    customerName: string;
    orderDate: string;
    currentLocation: string;
    trackingNumber: string;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        orderID: '#OR045',
        customerName: 'Mark Blake',
        orderDate: '30 Apr 2024',
        currentLocation: 'Chicago, IL',
        trackingNumber: '#TRK001',
        status: {
            delivered: true,
            inTransit: false,
            onTheWay: false,
            cancelled: false,
            pending: false
        }
    },
    {
        orderID: '#OR085',
        customerName: 'Cheryl Myers',
        orderDate: '29 Apr 2024',
        currentLocation: 'London, UK',
        trackingNumber: '#TRK002',
        status: {
            delivered: false,
            inTransit: true,
            onTheWay: false,
            cancelled: false,
            pending: false
        }
    },
    {
        orderID: '#OR099',
        customerName: 'Marc Bradley',
        orderDate: '28 Apr 2024',
        currentLocation: 'Paris, France',
        trackingNumber: '#TRK003',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: true,
            cancelled: false,
            pending: false
        }
    },
    {
        orderID: '#OR125',
        customerName: 'Ryan Vasquez',
        orderDate: 'N/A',
        currentLocation: 'N/A',
        trackingNumber: 'N/A',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: false,
            cancelled: true,
            pending: false
        }
    },
    {
        orderID: '#OR245',
        customerName: 'Donald Ness',
        orderDate: '26 Apr 2024',
        currentLocation: 'Tokyo, Japan',
        trackingNumber: '#TRK004',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: false,
            cancelled: false,
            pending: true
        }
    },
    {
        orderID: '#OR245',
        customerName: 'Donald Ness',
        orderDate: '26 Apr 2024',
        currentLocation: 'Tokyo, Japan',
        trackingNumber: '#TRK004',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: false,
            cancelled: false,
            pending: true
        }
    },
    {
        orderID: '#OR125',
        customerName: 'Ryan Vasquez',
        orderDate: 'N/A',
        currentLocation: 'N/A',
        trackingNumber: 'N/A',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: false,
            cancelled: true,
            pending: false
        }
    },
    {
        orderID: '#OR085',
        customerName: 'Cheryl Myers',
        orderDate: '29 Apr 2024',
        currentLocation: 'London, UK',
        trackingNumber: '#TRK002',
        status: {
            delivered: false,
            inTransit: true,
            onTheWay: false,
            cancelled: false,
            pending: false
        }
    },
    {
        orderID: '#OR045',
        customerName: 'Mark Blake',
        orderDate: '30 Apr 2024',
        currentLocation: 'Chicago, IL',
        trackingNumber: '#TRK001',
        status: {
            delivered: true,
            inTransit: false,
            onTheWay: false,
            cancelled: false,
            pending: false
        }
    },
    {
        orderID: '#OR099',
        customerName: 'Marc Bradley',
        orderDate: '28 Apr 2024',
        currentLocation: 'Paris, France',
        trackingNumber: '#TRK003',
        status: {
            delivered: false,
            inTransit: false,
            onTheWay: true,
            cancelled: false,
            pending: false
        }
    }
];