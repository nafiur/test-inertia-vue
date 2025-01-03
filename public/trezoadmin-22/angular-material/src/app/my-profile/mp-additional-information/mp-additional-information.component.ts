import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-mp-additional-information',
    standalone: true,
    imports: [RouterLink, MatCardModule],
    templateUrl: './mp-additional-information.component.html',
    styleUrl: './mp-additional-information.component.scss'
})
export class MpAdditionalInformationComponent {}