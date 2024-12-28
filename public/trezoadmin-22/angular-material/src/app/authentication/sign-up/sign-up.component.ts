import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatFormFieldModule, MatInputModule],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

    // Password Hide
    hide = true;

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}