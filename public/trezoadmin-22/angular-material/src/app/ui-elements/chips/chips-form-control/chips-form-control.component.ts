import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Component, inject, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
    selector: 'app-chips-form-control',
    standalone: true,
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatChipsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './chips-form-control.component.html',
    styleUrl: './chips-form-control.component.scss'
})
export class ChipsFormControlComponent {

    readonly keywords = signal(['angular', 'how-to', 'tutorial', 'accessibility']);
    readonly formControl = new FormControl(['angular']);

    announcer = inject(LiveAnnouncer);

    removeKeyword(keyword: string) {
        this.keywords.update(keywords => {
            const index = keywords.indexOf(keyword);
            if (index < 0) {
                return keywords;
            }

            keywords.splice(index, 1);
            this.announcer.announce(`removed ${keyword}`);
            return [...keywords];
        });
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        // Add our keyword
        if (value) {
            this.keywords.update(keywords => [...keywords, value]);
        }

        // Clear the input value
        event.chipInput!.clear();
    }

}