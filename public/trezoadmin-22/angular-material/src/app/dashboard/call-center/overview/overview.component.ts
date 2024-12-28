import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { TotalCallsComponent } from './total-calls/total-calls.component';
import { AnsweredCallsComponent } from './answered-calls/answered-calls.component';
import { MissedCallsComponent } from './missed-calls/missed-calls.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-overview',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, NgIf, NgClass, TotalCallsComponent, AnsweredCallsComponent, MissedCallsComponent],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}