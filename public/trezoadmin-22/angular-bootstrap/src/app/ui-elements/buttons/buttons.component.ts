import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-buttons',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './buttons.component.html',
    styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {}