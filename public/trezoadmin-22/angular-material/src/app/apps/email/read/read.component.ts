import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-read',
    standalone: true,
    imports: [RouterLink, SidebarComponent, MatButtonModule, MatMenuModule, MatCardModule],
    templateUrl: './read.component.html',
    styleUrl: './read.component.scss'
})
export class ReadComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}