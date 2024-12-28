import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-employee-leave-request',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, NgIf],
    templateUrl: './employee-leave-request.component.html',
    styleUrl: './employee-leave-request.component.scss'
})
export class EmployeeLeaveRequestComponent {

    displayedColumns: string[] = ['employee', 'leaveType', 'days', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    employee: any;
    leaveType: string;
    days: number;
    status: any;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        employee: {
            img: 'images/users/user42.jpg',
            name: 'John Doe',
            designation: 'Marketing'
        },
        leaveType: 'Vacation',
        days: 3,
        status: {
            approved: true,
            pending: false,
            rejected: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        employee: {
            img: 'images/users/user43.jpg',
            name: 'Jane Smith',
            designation: 'HR'
        },
        leaveType: 'Sick Leave',
        days: 2,
        status: {
            approved: false,
            pending: true,
            rejected: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        employee: {
            img: 'images/users/user44.jpg',
            name: 'Alex Johnson',
            designation: 'Developer'
        },
        leaveType: 'Maternity Leave',
        days: 4,
        status: {
            approved: false,
            pending: false,
            rejected: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        employee: {
            img: 'images/users/user45.jpg',
            name: 'Emily Davis',
            designation: 'UX Designer'
        },
        leaveType: 'Vacation',
        days: 2,
        status: {
            approved: true,
            pending: false,
            rejected: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        employee: {
            img: 'images/users/user46.jpg',
            name: 'Michael Brown',
            designation: 'Finance'
        },
        leaveType: 'Personal Leave',
        days: 1,
        status: {
            approved: false,
            pending: true,
            rejected: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        employee: {
            img: 'images/users/user44.jpg',
            name: 'Alex Johnson',
            designation: 'Developer'
        },
        leaveType: 'Maternity Leave',
        days: 4,
        status: {
            approved: false,
            pending: false,
            rejected: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        employee: {
            img: 'images/users/user45.jpg',
            name: 'Emily Davis',
            designation: 'UX Designer'
        },
        leaveType: 'Vacation',
        days: 2,
        status: {
            approved: true,
            pending: false,
            rejected: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        employee: {
            img: 'images/users/user43.jpg',
            name: 'Jane Smith',
            designation: 'HR'
        },
        leaveType: 'Sick Leave',
        days: 2,
        status: {
            approved: false,
            pending: true,
            rejected: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        employee: {
            img: 'images/users/user46.jpg',
            name: 'Michael Brown',
            designation: 'Finance'
        },
        leaveType: 'Personal Leave',
        days: 1,
        status: {
            approved: false,
            pending: true,
            rejected: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        employee: {
            img: 'images/users/user42.jpg',
            name: 'John Doe',
            designation: 'Marketing'
        },
        leaveType: 'Vacation',
        days: 3,
        status: {
            approved: true,
            pending: false,
            rejected: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];