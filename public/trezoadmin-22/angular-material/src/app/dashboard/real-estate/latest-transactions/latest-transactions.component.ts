import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-latest-transactions',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule],
    templateUrl: './latest-transactions.component.html',
    styleUrl: './latest-transactions.component.scss'
})
export class LatestTransactionsComponent {

    displayedColumns: string[] = ['customerID', 'customerName', 'property', 'date', 'price', 'status', 'payment', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    customerID: string;
    customerName: any;
    property: string;
    date: string;
    price: string;
    status: any;
    payment: string;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        customerID: '#TRE0015',
        customerName: {
            img: 'images/users/user1.jpg',
            name: 'Sarah Johnson'
        },
        property: 'Industrial',
        date: '30 Apr 2024',
        price: '$500,000',
        status: {
            completed: true,
            pending: false,
            cancel: false,
            rejected: false
        },
        payment: 'Master Card',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0099',
        customerName: {
            img: 'images/users/user2.jpg',
            name: 'Michael Smith'
        },
        property: 'Office',
        date: '29 Apr 2024',
        price: '$1,200,000',
        status: {
            completed: false,
            pending: true,
            cancel: false,
            rejected: false
        },
        payment: 'Paypal',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0145',
        customerName: {
            img: 'images/users/user3.jpg',
            name: 'Emily Brown'
        },
        property: 'Multi-Family',
        date: '28 Apr 2024',
        price: '$350,000',
        status: {
            completed: false,
            pending: false,
            cancel: true,
            rejected: false
        },
        payment: 'Wise',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0247',
        customerName: {
            img: 'images/users/user4.jpg',
            name: 'Jason Lee'
        },
        property: 'Residential',
        date: '27 Apr 2024',
        price: '$220,000',
        status: {
            completed: true,
            pending: false,
            cancel: false,
            rejected: false
        },
        payment: 'Payoneer',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0299',
        customerName: {
            img: 'images/users/user5.jpg',
            name: 'Ashley Davis'
        },
        property: 'Commercial',
        date: '26 Apr 2024',
        price: '$1,500,000',
        status: {
            completed: false,
            pending: false,
            cancel: false,
            rejected: true
        },
        payment: 'Credit Card',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0299',
        customerName: {
            img: 'images/users/user5.jpg',
            name: 'Ashley Davis'
        },
        property: 'Commercial',
        date: '26 Apr 2024',
        price: '$1,500,000',
        status: {
            completed: false,
            pending: false,
            cancel: false,
            rejected: true
        },
        payment: 'Credit Card',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0247',
        customerName: {
            img: 'images/users/user4.jpg',
            name: 'Jason Lee'
        },
        property: 'Residential',
        date: '27 Apr 2024',
        price: '$220,000',
        status: {
            completed: true,
            pending: false,
            cancel: false,
            rejected: false
        },
        payment: 'Payoneer',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0099',
        customerName: {
            img: 'images/users/user2.jpg',
            name: 'Michael Smith'
        },
        property: 'Office',
        date: '29 Apr 2024',
        price: '$1,200,000',
        status: {
            completed: false,
            pending: true,
            cancel: false,
            rejected: false
        },
        payment: 'Paypal',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0145',
        customerName: {
            img: 'images/users/user3.jpg',
            name: 'Emily Brown'
        },
        property: 'Multi-Family',
        date: '28 Apr 2024',
        price: '$350,000',
        status: {
            completed: false,
            pending: false,
            cancel: true,
            rejected: false
        },
        payment: 'Wise',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        customerID: '#TRE0015',
        customerName: {
            img: 'images/users/user1.jpg',
            name: 'Sarah Johnson'
        },
        property: 'Industrial',
        date: '30 Apr 2024',
        price: '$500,000',
        status: {
            completed: true,
            pending: false,
            cancel: false,
            rejected: false
        },
        payment: 'Master Card',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];