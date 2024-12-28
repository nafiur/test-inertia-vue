import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-fp-contact',
    standalone: true,
    imports: [RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule],
    templateUrl: './fp-contact.component.html',
    styleUrl: './fp-contact.component.scss'
})
export class FpContactComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}