import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TopShippingMethodsService } from './top-shipping-methods.service';

@Component({
    selector: 'app-top-shipping-methods',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './top-shipping-methods.component.html',
    styleUrl: './top-shipping-methods.component.scss'
})
export class TopShippingMethodsComponent {

    constructor(
        private topShippingMethodsService: TopShippingMethodsService
    ) {}

    ngOnInit(): void {
        this.topShippingMethodsService.loadChart();
    }

}