import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-bt-recent-leads',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatCheckboxModule],
    templateUrl: './bt-recent-leads.component.html',
    styleUrl: './bt-recent-leads.component.scss'
})
export class BtRecentLeadsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}