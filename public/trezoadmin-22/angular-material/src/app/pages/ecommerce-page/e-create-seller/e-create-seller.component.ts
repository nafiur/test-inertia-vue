import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxEditorModule, Editor, Toolbar } from 'ngx-editor';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-e-create-seller',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, FileUploadModule, NgxEditorModule, MatNativeDateModule, NgIf],
    templateUrl: './e-create-seller.component.html',
    styleUrl: './e-create-seller.component.scss'
})
export class ECreateSellerComponent {

    // Text Editor
    editor!: Editor | null;  // Make it nullable
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            // Initialize the editor only in the browser
            this.editor = new Editor();
        }
    }

    ngOnDestroy(): void {
        if (isPlatformBrowser(this.platformId) && this.editor) {
            this.editor.destroy();
        }
    }

    // File Uploader
    public multiple: boolean = false;

}