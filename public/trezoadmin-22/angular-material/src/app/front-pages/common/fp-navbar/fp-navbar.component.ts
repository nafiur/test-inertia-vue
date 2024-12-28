import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-fp-navbar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgClass, MatButtonModule],
    templateUrl: './fp-navbar.component.html',
    styleUrl: './fp-navbar.component.scss'
})
export class FpNavbarComponent {

    // Toggle Class
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}