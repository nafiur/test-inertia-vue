import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-course-instructor',
    standalone: true,
    imports: [RouterLink, MatCardModule],
    templateUrl: './course-instructor.component.html',
    styleUrl: './course-instructor.component.scss'
})
export class CourseInstructorComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}