import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-exchange',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule],
    templateUrl: './exchange.component.html',
    styleUrl: './exchange.component.scss'
})
export class ExchangeComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}