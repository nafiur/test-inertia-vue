import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-exchange',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './exchange.component.html',
    styleUrl: './exchange.component.scss'
})
export class ExchangeComponent {

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Card Header Menu
    isCryptocurrencyTypesOpen1 = false;
    isCryptocurrencyTypesOpen2 = false;
    toggleCryptocurrencyTypesMenu1() {
        this.isCryptocurrencyTypesOpen1 = !this.isCryptocurrencyTypesOpen1;
    }
    toggleCryptocurrencyTypesMenu2() {
        this.isCryptocurrencyTypesOpen2 = !this.isCryptocurrencyTypesOpen2;
    }
    @HostListener('document:click', ['$event'])
    handleClickOutside(event: Event) {
        const target = event.target as HTMLElement;
        if (!target.closest('.cryptocurrency-types.one')) {
            this.isCryptocurrencyTypesOpen1 = false;
        }
        if (!target.closest('.cryptocurrency-types.two')) {
            this.isCryptocurrencyTypesOpen2 = false;
        }
    }

}