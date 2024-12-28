import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-collections',
    standalone: true,
    imports: [MatCardModule, RouterLink, MatButtonModule, CarouselModule],
    templateUrl: './top-collections.component.html',
    styleUrl: './top-collections.component.scss'
})
export class TopCollectionsComponent {

	constructor(
		public themeService: CustomizerSettingsService
	) {}

	// Owl Carousel
    topCollectionsSlides: OwlOptions = {
        items: 1,
		nav: false,
		margin: 25,
		loop: true,
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