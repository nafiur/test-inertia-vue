import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-accounts-receivable',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './accounts-receivable.component.html',
    styleUrl: './accounts-receivable.component.scss'
})
export class AccountsReceivableComponent {}