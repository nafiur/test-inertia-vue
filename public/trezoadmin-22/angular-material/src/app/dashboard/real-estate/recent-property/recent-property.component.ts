import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-recent-property',
    standalone: true,
    imports: [MatCardModule, CarouselModule, RouterLink, MatButtonModule],
    templateUrl: './recent-property.component.html',
    styleUrl: './recent-property.component.scss'
})
export class RecentPropertyComponent {

	constructor(
		public themeService: CustomizerSettingsService
	) {}

    // Owl Carousel
    recentPropertySlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		margin: 25,
		dots: true,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>"
		]
    }

}