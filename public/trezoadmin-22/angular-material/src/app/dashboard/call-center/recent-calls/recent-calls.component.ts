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
    selector: 'app-recent-calls',
    standalone: true,
    imports: [MatTableModule, MatSortModule, NgIf, MatCardModule, MatButtonModule, MatMenuModule, MatPaginatorModule],
    templateUrl: './recent-calls.component.html',
    styleUrl: './recent-calls.component.scss'
})
export class RecentCallsComponent {

    displayedColumns: string[] = ['callerName', 'callType', 'duration', 'status', 'time', 'csat'];
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
    callerName: any;
    callType: any;
    duration: string;
    time: string;
    status: any;
    csat: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
    {
        callerName: {
            img: 'images/users/user58.jpg',
            name: 'Emily Johnson',
            number: '+1 555-123-4567'
        },
        callType: {
            inbound: true,
            outbound: false
        },
        duration: '5 mins',
        status: {
            resolved: true,
            pending: false,
            dropped: false
        },
        time: '10:30 AM',
        csat: '90%'
    },
    {
        callerName: {
            img: 'images/users/user59.jpg',
            name: 'Sarah Green',
            number: '+44 20 7946 0958'
        },
        callType: {
            inbound: false,
            outbound: true
        },
        duration: '3 mins',
        status: {
            resolved: false,
            pending: true,
            dropped: false
        },
        time: '10:35 AM',
        csat: '85%'
    },
    {
        callerName: {
            img: 'images/users/user60.jpg',
            name: 'Adam Smith',
            number: '+1 555-234-5678'
        },
        callType: {
            inbound: true,
            outbound: false
        },
        duration: '7 mins',
        status: {
            resolved: true,
            pending: false,
            dropped: false
        },
        time: '10:40 AM',
        csat: '83%'
    },
    {
        callerName: {
            img: 'images/users/user61.jpg',
            name: 'Laura Martin',
            number: '+61 2 1234 5678'
        },
        callType: {
            inbound: true,
            outbound: false
        },
        duration: '4 mins',
        status: {
            resolved: false,
            pending: false,
            dropped: true
        },
        time: '10:45 AM',
        csat: '87%'
    },
    {
        callerName: {
            img: 'images/users/user61.jpg',
            name: 'Laura Martin',
            number: '+61 2 1234 5678'
        },
        callType: {
            inbound: true,
            outbound: false
        },
        duration: '4 mins',
        status: {
            resolved: false,
            pending: false,
            dropped: true
        },
        time: '10:45 AM',
        csat: '87%'
    },
    {
        callerName: {
            img: 'images/users/user60.jpg',
            name: 'Adam Smith',
            number: '+1 555-234-5678'
        },
        callType: {
            inbound: true,
            outbound: false
        },
        duration: '7 mins',
        status: {
            resolved: true,
            pending: false,
            dropped: false
        },
        time: '10:40 AM',
        csat: '83%'
    },
    {
        callerName: {
            img: 'images/users/user59.jpg',
            name: 'Sarah Green',
            number: '+44 20 7946 0958'
        },
        callType: {
            inbound: false,
            outbound: true
        },
        duration: '3 mins',
        status: {
            resolved: false,
            pending: true,
            dropped: false
        },
        time: '10:35 AM',
        csat: '85%'
    },
    {
        callerName: {
            img: 'images/users/user58.jpg',
            name: 'Emily Johnson',
            number: '+1 555-123-4567'
        },
        callType: {
            inbound: true,
            outbound: false
        },
        duration: '5 mins',
        status: {
            resolved: true,
            pending: false,
            dropped: false
        },
        time: '10:30 AM',
        csat: '90%'
    }
];