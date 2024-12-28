import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-coming-soon',
    standalone: true,
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
    templateUrl: './coming-soon.component.html',
    styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}