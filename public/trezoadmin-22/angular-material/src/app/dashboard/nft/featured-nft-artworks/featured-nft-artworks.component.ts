import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-featured-nft-artworks',
    standalone: true,
    imports: [MatCardModule, CarouselModule, RouterLink],
    templateUrl: './featured-nft-artworks.component.html',
    styleUrl: './featured-nft-artworks.component.scss'
})
export class FeaturedNFTArtworksComponent {
    
    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    // Owl Carousel
    featuredNftArtworksSlides: OwlOptions = {
        nav: true,
        margin: 25,
        loop: true,
        dots: false,
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
                items: 2
            },
            650: {
                items: 3
            },
            875: {
                items: 3
            },
            1015: {
                items: 3
            }
        }
    }

}