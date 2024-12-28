import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-all-nfts',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, CarouselModule],
    templateUrl: './all-nfts.component.html',
    styleUrl: './all-nfts.component.scss'
})
export class AllNftsComponent {

	constructor(
		public themeService: CustomizerSettingsService
	) {}

	// Owl Carousel
    allNftsSlides: OwlOptions = {
		nav: true,
		margin: 15,
		loop: true,
		dots: false,
		autoplay: true,
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
				items: 2
			},
			650: {
				items: 3
			},
			875: {
				items: 3
			},
			1015: {
				items: 4
			}
		}
    }

}