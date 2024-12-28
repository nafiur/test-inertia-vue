import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-our-top-courses',
    standalone: true,
    imports: [RouterLink, MatCardModule, CarouselModule, MatButtonModule],
    templateUrl: './our-top-courses.component.html',
    styleUrl: './our-top-courses.component.scss'
})
export class OurTopCoursesComponent {

	// Owl Carousel
    ourTopCoursesSlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		margin: 25,
		dots: true,
		autoplay: true,
		smartSpeed: 500,
        animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>"
		]
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}