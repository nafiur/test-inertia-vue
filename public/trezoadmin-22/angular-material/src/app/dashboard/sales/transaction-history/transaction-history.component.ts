import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-transaction-history',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './transaction-history.component.html',
    styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}