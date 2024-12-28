import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-transaction-history',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatCheckboxModule],
    templateUrl: './transaction-history.component.html',
    styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {

    displayedColumns: string[] = ['transactionID', 'date', 'description', 'amount', 'type', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    transactionID: string;
    date: string;
    description: string;
    amount: string;
    type: string;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        transactionID: '#TID0015',
        date: '30 Apr 2024',
        description: 'Payment from Client',
        amount: '$5,000',
        type: 'Income',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0099',
        date: '29 Apr 2024',
        description: 'Office Supplies',
        amount: '$10,000',
        type: 'Expense',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0145',
        date: '28 Apr 2024',
        description: 'Website Maintenance',
        amount: '$35,000',
        type: 'Expense',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0247',
        date: '27 Apr 2024',
        description: 'Payment from Client',
        amount: '$2,000',
        type: 'Income',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0299',
        date: '26 Apr 2024',
        description: 'Advertising Campaign',
        amount: '$15,500',
        type: 'Expense',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0015',
        date: '25 Apr 2024',
        description: 'Payment from Client',
        amount: '$5,000',
        type: 'Income',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0099',
        date: '24 Apr 2024',
        description: 'Office Supplies',
        amount: '$10,000',
        type: 'Expense',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0099',
        date: '24 Apr 2024',
        description: 'Office Supplies',
        amount: '$10,000',
        type: 'Expense',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0015',
        date: '25 Apr 2024',
        description: 'Payment from Client',
        amount: '$5,000',
        type: 'Income',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0299',
        date: '26 Apr 2024',
        description: 'Advertising Campaign',
        amount: '$15,500',
        type: 'Expense',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0247',
        date: '27 Apr 2024',
        description: 'Payment from Client',
        amount: '$2,000',
        type: 'Income',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0099',
        date: '29 Apr 2024',
        description: 'Office Supplies',
        amount: '$10,000',
        type: 'Expense',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0015',
        date: '30 Apr 2024',
        description: 'Payment from Client',
        amount: '$5,000',
        type: 'Income',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        transactionID: '#TID0145',
        date: '28 Apr 2024',
        description: 'Website Maintenance',
        amount: '$35,000',
        type: 'Expense',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];