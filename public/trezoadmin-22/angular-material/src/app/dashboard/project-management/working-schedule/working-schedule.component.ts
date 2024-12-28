import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-working-schedule',
    standalone: true,
    imports: [MatCardModule, MatDatepickerModule, CarouselModule, MatNativeDateModule],
    templateUrl: './working-schedule.component.html',
    styleUrl: './working-schedule.component.scss'
})
export class WorkingScheduleComponent {

	// Owl Carousel
    upcomingEventsSlides: OwlOptions = {
        items: 1,
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
		]
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}