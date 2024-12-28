import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-accounts-payable',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './accounts-payable.component.html',
    styleUrl: './accounts-payable.component.scss'
})
export class AccountsPayableComponent {}