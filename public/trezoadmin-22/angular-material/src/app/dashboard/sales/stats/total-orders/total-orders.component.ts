import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TotalOrdersService } from './total-orders.service';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-total-orders',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './total-orders.component.html',
    styleUrl: './total-orders.component.scss'
})
export class TotalOrdersComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private totalOrdersService: TotalOrdersService
    ) {}

    ngOnInit(): void {
        this.totalOrdersService.loadChart();
    }

}