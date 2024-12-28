import { Component, ViewChild } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-promotions-emails',
    standalone: true,
    imports: [RouterLink, MatTableModule, MatCheckboxModule, MatPaginatorModule],
    templateUrl: './promotions-emails.component.html',
    styleUrl: './promotions-emails.component.scss'
})
export class PromotionsEmailsComponent {

    displayedColumns: string[] = ['select', 'title', 'description', 'date'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Whether the number of selected elements matches the total number of rows.
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    // Selects all rows if they are not all selected; otherwise clear selection.
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }

    // The label for the checkbox on the passed row
    checkboxLabel(row?: PeriodicElement): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.title + 1}`;
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}

export interface PeriodicElement {
    title: string;
    description: any;
    date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        title: 'Facebook',
        description: {
            title: 'Friend Request',
            subtitle: '- Sed in libero eget lorem fermentum...'
        },
        date: '9:25 AM'
    },
    {
        title: 'Google',
        description: {
            title: '2-Step Verification Turn Off',
            subtitle: '- Integer nec arcu ac nisi...'
        },
        date: '3:36 PM'
    },
    {
        title: 'Ethan Parker',
        description: {
            title: 'Leave Application',
            subtitle: '- Integer nec arcu ac nisi...'
        },
        date: 'Jun 22'
    },
    {
        title: 'LinkedIn',
        description: {
            title: 'Travel Information',
            subtitle: '- Vivamus vestibulum ligula in mauris...'
        },
        date: 'Jun 25'
    },
    {
        title: 'Instagram',
        description: {
            title: 'Training Schedule',
            subtitle: '- Vivamus vestibulum ligula in mauris...'
        },
        date: 'Jun 21'
    },
    {
        title: 'Isabella Cooper',
        description: {
            title: 'Internal Auditor',
            subtitle: '- Sed in libero eget lorem fermentum...'
        },
        date: 'Jun 19'
    },
    {
        title: 'Dribbble',
        description: {
            title: 'Design Inspiration',
            subtitle: '- Sed in libero eget lorem fermentum...'
        },
        date: 'Jun 21'
    },
    {
        title: 'Google',
        description: {
            title: 'Password Changed',
            subtitle: '- Integer nec arcu ac nisi...'
        },
        date: 'Jun 17'
    },
    {
        title: 'Olivia Rodriguez',
        description: {
            title: 'Virtual Training',
            subtitle: '- Vivamus vestibulum ligula in mauris...'
        },
        date: 'Jun 15'
    },
    {
        title: 'YouTube',
        description: {
            title: 'New Subscriber',
            subtitle: '- Sed in libero eget lorem fermentum...'
        },
        date: 'Jun 12'
    },
    {
        title: 'Google',
        description: {
            title: 'Security Alert',
            subtitle: '- Vivamus vestibulum ligula in mauris...'
        },
        date: 'Jun 10'
    },
    {
        title: 'Google',
        description: {
            title: 'Security Alert',
            subtitle: '- Vivamus vestibulum ligula in mauris...'
        },
        date: 'Jun 10'
    },
    {
        title: 'YouTube',
        description: {
            title: 'New Subscriber',
            subtitle: '- Sed in libero eget lorem fermentum...'
        },
        date: 'Jun 12'
    },
    {
        title: 'Olivia Rodriguez',
        description: {
            title: 'Virtual Training',
            subtitle: '- Vivamus vestibulum ligula in mauris...'
        },
        date: 'Jun 15'
    },
    {
        title: 'Google',
        description: {
            title: 'Password Changed',
            subtitle: '- Integer nec arcu ac nisi...'
        },
        date: 'Jun 17'
    },
    {
        title: 'Isabella Cooper',
        description: {
            title: 'Internal Auditor',
            subtitle: '- Sed in libero eget lorem fermentum...'
        },
        date: 'Jun 19'
    },
    {
        title: 'Instagram',
        description: {
            title: 'Training Schedule',
            subtitle: '- Vivamus vestibulum ligula in mauris...'
        },
        date: 'Jun 21'
    },
    {
        title: 'Dribbble',
        description: {
            title: 'Design Inspiration',
            subtitle: '- Sed in libero eget lorem fermentum...'
        },
        date: 'Jun 21'
    },
    {
        title: 'Ethan Parker',
        description: {
            title: 'Leave Application',
            subtitle: '- Integer nec arcu ac nisi...'
        },
        date: 'Jun 22'
    },
    {
        title: 'LinkedIn',
        description: {
            title: 'Travel Information',
            subtitle: '- Vivamus vestibulum ligula in mauris...'
        },
        date: 'Jun 25'
    },
    {
        title: 'Facebook',
        description: {
            title: 'Friend Request',
            subtitle: '- Sed in libero eget lorem fermentum...'
        },
        date: '9:25 AM'
    },
    {
        title: 'Google',
        description: {
            title: '2-Step Verification Turn Off',
            subtitle: '- Integer nec arcu ac nisi...'
        },
        date: '3:36 PM'
    }
];