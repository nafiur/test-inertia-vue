import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-dt-to-do-list',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, NgIf, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
    templateUrl: './dt-to-do-list.component.html',
    styleUrl: './dt-to-do-list.component.scss'
})
export class DtToDoListComponent {

    displayedColumns: string[] = ['select', 'id', 'ticketTitle', 'assignedTo', 'dueDate', 'priority', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ticketTitle + 1}`;
    }

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}

export interface PeriodicElement {
    id: string;
    ticketTitle: string;
    assignedTo: string;
    dueDate: string;
    priority: string;
    status: any;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: '#854',
        ticketTitle: 'Network Infrastructure',
        assignedTo: 'Oliver Clark',
        dueDate: '30 Apr 2024',
        priority: 'High',
        status: {
            finished: true,
            pending: false,
            inProgress: false,
            cancelled: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#853',
        ticketTitle: 'Cloud Migration',
        assignedTo: 'Ethan Baker',
        dueDate: '25 Apr 2024',
        priority: 'Low',
        status: {
            finished: false,
            pending: true,
            inProgress: false,
            cancelled: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#852',
        ticketTitle: 'Website Revamp',
        assignedTo: 'Sophia Carter',
        dueDate: '20 Apr 2024',
        priority: 'Medium',
        status: {
            finished: false,
            pending: false,
            inProgress: true,
            cancelled: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#851',
        ticketTitle: 'Mobile Application',
        assignedTo: 'Ava Cooper',
        dueDate: '15 Apr 2024',
        priority: 'High',
        status: {
            finished: true,
            pending: false,
            inProgress: false,
            cancelled: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        id: '#850',
        ticketTitle: 'System Deployment',
        assignedTo: 'Isabella Evans',
        dueDate: '10 Apr 2024',
        priority: 'Low',
        status: {
            finished: false,
            pending: false,
            inProgress: false,
            cancelled: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];