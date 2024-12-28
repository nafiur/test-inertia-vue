import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TotalUsersService } from './total-users.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-total-users',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './total-users.component.html',
    styleUrl: './total-users.component.scss'
})
export class TotalUsersComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private totalUsersService: TotalUsersService
    ) {}

    ngOnInit(): void {
        this.totalUsersService.loadChart();
    }

}