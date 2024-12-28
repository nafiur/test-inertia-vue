import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-lock-screen',
    standalone: true,
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
    templateUrl: './lock-screen.component.html',
    styleUrl: './lock-screen.component.scss'
})
export class LockScreenComponent {

    // Password Hide
    hide = true;

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}