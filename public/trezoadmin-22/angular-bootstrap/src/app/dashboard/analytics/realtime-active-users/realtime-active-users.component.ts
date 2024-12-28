import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RealtimeActiveUsersService } from './realtime-active-users.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-realtime-active-users',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './realtime-active-users.component.html',
    styleUrl: './realtime-active-users.component.scss'
})
export class RealtimeActiveUsersComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private realtimeActiveUsersService: RealtimeActiveUsersService
    ) {}

    ngOnInit(): void {
        this.realtimeActiveUsersService.loadChart();
    }

}