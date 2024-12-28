import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-overview',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

    formattedDate: string;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.formattedDate = this.formatDate();
    }

    formatDate(): string {
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
        return today.toLocaleDateString('en-US', options); // Format: "December 10, 2024"
    }

}