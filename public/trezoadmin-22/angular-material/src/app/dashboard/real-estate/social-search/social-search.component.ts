import { Component } from '@angular/core';
import { SocialSearchService } from './social-search.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-social-search',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './social-search.component.html',
    styleUrl: './social-search.component.scss'
})
export class SocialSearchComponent {

    constructor(
        private socialSearchService: SocialSearchService
    ) {}

    ngOnInit(): void {
        this.socialSearchService.loadChart();
    }

}