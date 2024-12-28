import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-customer-reviews',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatMenuModule, CarouselModule],
    templateUrl: './customer-reviews.component.html',
    styleUrl: './customer-reviews.component.scss'
})
export class CustomerReviewsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
    
    // Owl Carousel
    customerReviewsSlides: OwlOptions = {
        nav: false,
        loop: true,
        margin: 25,
        dots: true,
        autoplay: false,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navText: [
            "<i class='ri-arrow-left-line'></i>",
            "<i class='ri-arrow-right-line'></i>"
        ],
        responsive: {
			0: {
				items: 1
			},
			505: {
				items: 1
			},
			665: {
				items: 2
			},
			890: {
				items: 2
			},
			1115: {
                items: 2
			}
		}
    }

}