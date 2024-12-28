import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductTradeConditionsService } from './product-trade-conditions.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-product-trade-conditions',
    standalone: true,
        imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './product-trade-conditions.component.html',
    styleUrl: './product-trade-conditions.component.scss'
})
export class ProductTradeConditionsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private productTradeConditionsService: ProductTradeConditionsService
    ) {}

    ngOnInit(): void {
        this.productTradeConditionsService.loadChart();
    }

}