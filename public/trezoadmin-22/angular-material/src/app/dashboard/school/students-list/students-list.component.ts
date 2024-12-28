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
    selector: 'app-students-list',
    standalone: true,
    imports: [MatTableModule, MatSortModule, NgIf, MatCardModule, MatButtonModule, MatMenuModule, MatPaginatorModule],
    templateUrl: './students-list.component.html',
    styleUrl: './students-list.component.scss'
})
export class StudentsListComponent {

    displayedColumns: string[] = ['id', 'student', 'subject', 'class', 'contact', 'result', 'status', 'action'];
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
    student: any;
    subject: string;
    class: string;
    contact: string;
    result: string;
    status: any;
    action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: '#101',
        student: {
            img: 'images/users/user46.jpg',
            name: 'Emily Johnson',
            email: 'emily@gmail.com'
        },
        subject: 'Math',
        class: '5A',
        contact: '(555) 123-4567',
        result: '89% Overall (A)',
        status: {
            passed: true,
            dropped: false,
            fail: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#102',
        student: {
            img: 'images/users/user47.jpg',
            name: 'Michael Thompson',
            email: 'lmichael@gmail.com'
        },
        subject: 'English',
        class: '8B',
        contact: '(555) 234-5678',
        result: '32% Overall (F)',
        status: {
            passed: false,
            dropped: false,
            fail: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#103',
        student: {
            img: 'images/users/user48.jpg',
            name: 'Sarah Williams',
            email: 'sarah@gmail.com'
        },
        subject: 'Geography',
        class: '4C',
        contact: '(555) 345-6789',
        result: '92% Overall (A+)',
        status: {
            passed: false,
            dropped: true,
            fail: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#104',
        student: {
            img: 'images/users/user49.jpg',
            name: 'David Anderson',
            email: 'david@gmail.com'
        },
        subject: 'Physics',
        class: '6A',
        contact: '(555) 456-7890',
        result: '85% Overall (B+)',
        status: {
            passed: true,
            dropped: false,
            fail: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#105',
        student: {
            img: 'images/users/user50.jpg',
            name: 'Jessica Martinez',
            email: 'jessica@gmail.com'
        },
        subject: 'History',
        class: '7B',
        contact: '(555) 567-8901',
        result: '25% Overall (F)',
        status: {
            passed: false,
            dropped: false,
            fail: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#106',
        student: {
            img: 'images/users/user51.jpg',
            name: 'James Lee',
            email: 'james@gmail.com'
        },
        subject: 'Biology',
        class: '5B',
        contact: '(555) 678-9012',
        result: '88% Overall (A)',
        status: {
            passed: true,
            dropped: false,
            fail: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#107',
        student: {
            img: 'images/users/user52.jpg',
            name: 'Ethan Clark',
            email: 'ethan@gmail.com'
        },
        subject: 'Music',
        class: '8A',
        contact: '(555) 789-0123',
        result: '93% Overall (A+)',
        status: {
            passed: false,
            dropped: true,
            fail: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#107',
        student: {
            img: 'images/users/user52.jpg',
            name: 'Ethan Clark',
            email: 'ethan@gmail.com'
        },
        subject: 'Music',
        class: '8A',
        contact: '(555) 789-0123',
        result: '93% Overall (A+)',
        status: {
            passed: false,
            dropped: true,
            fail: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#104',
        student: {
            img: 'images/users/user49.jpg',
            name: 'David Anderson',
            email: 'david@gmail.com'
        },
        subject: 'Physics',
        class: '6A',
        contact: '(555) 456-7890',
        result: '85% Overall (B+)',
        status: {
            passed: true,
            dropped: false,
            fail: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#102',
        student: {
            img: 'images/users/user47.jpg',
            name: 'Michael Thompson',
            email: 'lmichael@gmail.com'
        },
        subject: 'English',
        class: '8B',
        contact: '(555) 234-5678',
        result: '32% Overall (F)',
        status: {
            passed: false,
            dropped: false,
            fail: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#101',
        student: {
            img: 'images/users/user46.jpg',
            name: 'Emily Johnson',
            email: 'emily@gmail.com'
        },
        subject: 'Math',
        class: '5A',
        contact: '(555) 123-4567',
        result: '89% Overall (A)',
        status: {
            passed: true,
            dropped: false,
            fail: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#103',
        student: {
            img: 'images/users/user48.jpg',
            name: 'Sarah Williams',
            email: 'sarah@gmail.com'
        },
        subject: 'Geography',
        class: '4C',
        contact: '(555) 345-6789',
        result: '92% Overall (A+)',
        status: {
            passed: false,
            dropped: true,
            fail: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#105',
        student: {
            img: 'images/users/user50.jpg',
            name: 'Jessica Martinez',
            email: 'jessica@gmail.com'
        },
        subject: 'History',
        class: '7B',
        contact: '(555) 567-8901',
        result: '25% Overall (F)',
        status: {
            passed: false,
            dropped: false,
            fail: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#106',
        student: {
            img: 'images/users/user51.jpg',
            name: 'James Lee',
            email: 'james@gmail.com'
        },
        subject: 'Biology',
        class: '5B',
        contact: '(555) 678-9012',
        result: '88% Overall (A)',
        status: {
            passed: true,
            dropped: false,
            fail: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];