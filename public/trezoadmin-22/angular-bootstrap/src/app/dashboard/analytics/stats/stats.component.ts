import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewRegistersService } from './new-registers.service';
import { WebsiteVisitsService } from './website-visits.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss'
})
export class StatsComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private newRegistersService: NewRegistersService,
        private websiteVisitsService: WebsiteVisitsService
    ) {}

    ngOnInit(): void {
        this.newRegistersService.loadChart();
        this.websiteVisitsService.loadChart();
    }

}