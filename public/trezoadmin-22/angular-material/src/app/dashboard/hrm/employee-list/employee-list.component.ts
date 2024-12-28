import { LiveAnnouncer } from '@angular/cdk/a11y';
import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-employee-list',
    standalone: true,
    imports: [MatTableModule, MatSortModule, NgIf, MatCardModule, MatButtonModule, MatMenuModule, MatPaginatorModule],
    templateUrl: './employee-list.component.html',
    styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

    displayedColumns: string[] = ['id', 'employee', 'department', 'position', 'joiningDate', 'salary', 'status', 'action'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    constructor(
        private _liveAnnouncer: LiveAnnouncer
    ) {}
  
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
  
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

}

export interface PeriodicElement {
    id: string;
    employee: any;
    department: string;
    position: string;
    joiningDate: string;
    salary: string;
    status: any;
    action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: 'EMP001',
        employee: {
            img: 'images/users/user36.jpg',
            name: 'Olivia Turner',
            email: 'olivia@gmail.com'
        },
        department: 'Marketing',
        position: 'Marketing Lead',
        joiningDate: 'Jan 15, 2020',
        salary: '$85,000',
        status: {
            active: true,
            onLeave: false,
            resigned: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: 'EMP002',
        employee: {
            img: 'images/users/user37.jpg',
            name: 'Liam Bennett',
            email: 'liam@gmail.com'
        },
        department: 'Human Resources',
        position: 'HR Manager',
        joiningDate: 'Mar 10, 2021',
        salary: '$75,000',
        status: {
            active: false,
            onLeave: true,
            resigned: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: 'EMP003',
        employee: {
            img: 'images/users/user38.jpg',
            name: 'Sophia Myers',
            email: 'sophia@gmail.com'
        },
        department: 'IT',
        position: 'Software Engineer',
        joiningDate: 'Feb 22, 2019',
        salary: '$95,000',
        status: {
            active: true,
            onLeave: false,
            resigned: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: 'EMP004',
        employee: {
            img: 'images/users/user39.jpg',
            name: 'Ethan Collins',
            email: 'ethan@gmail.com'
        },
        department: 'Sales',
        position: 'Sales Manager',
        joiningDate: 'Apr 12, 2022',
        salary: '$90,000',
        status: {
            active: true,
            onLeave: false,
            resigned: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: 'EMP005',
        employee: {
            img: 'images/users/user40.jpg',
            name: 'Isabella Reed',
            email: 'isabella@gmail.com'
        },
        department: 'Finance',
        position: 'Financial Analyst',
        joiningDate: 'Aug 05, 2020',
        salary: '$80,000',
        status: {
            active: false,
            onLeave: false,
            resigned: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: 'EMP003',
        employee: {
            img: 'images/users/user38.jpg',
            name: 'Sophia Myers',
            email: 'sophia@gmail.com'
        },
        department: 'IT',
        position: 'Software Engineer',
        joiningDate: 'Feb 22, 2019',
        salary: '$95,000',
        status: {
            active: true,
            onLeave: false,
            resigned: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: 'EMP004',
        employee: {
            img: 'images/users/user39.jpg',
            name: 'Ethan Collins',
            email: 'ethan@gmail.com'
        },
        department: 'Sales',
        position: 'Sales Manager',
        joiningDate: 'Apr 12, 2022',
        salary: '$90,000',
        status: {
            active: true,
            onLeave: false,
            resigned: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: 'EMP005',
        employee: {
            img: 'images/users/user40.jpg',
            name: 'Isabella Reed',
            email: 'isabella@gmail.com'
        },
        department: 'Finance',
        position: 'Financial Analyst',
        joiningDate: 'Aug 05, 2020',
        salary: '$80,000',
        status: {
            active: false,
            onLeave: false,
            resigned: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: 'EMP001',
        employee: {
            img: 'images/users/user36.jpg',
            name: 'Olivia Turner',
            email: 'olivia@gmail.com'
        },
        department: 'Marketing',
        position: 'Marketing Lead',
        joiningDate: 'Jan 15, 2020',
        salary: '$85,000',
        status: {
            active: true,
            onLeave: false,
            resigned: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: 'EMP002',
        employee: {
            img: 'images/users/user37.jpg',
            name: 'Liam Bennett',
            email: 'liam@gmail.com'
        },
        department: 'Human Resources',
        position: 'HR Manager',
        joiningDate: 'Mar 10, 2021',
        salary: '$75,000',
        status: {
            active: false,
            onLeave: true,
            resigned: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];