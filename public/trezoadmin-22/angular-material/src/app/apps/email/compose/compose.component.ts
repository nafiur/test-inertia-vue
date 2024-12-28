import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NgxEditorModule, Editor, Toolbar } from 'ngx-editor';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-compose',
    standalone: true,
    imports: [RouterLink, SidebarComponent, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, FormsModule, NgIf, NgxEditorModule, MatMenuModule],
    templateUrl: './compose.component.html',
    styleUrl: './compose.component.scss'
})
export class ComposeComponent {

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

    // Select Emails
    emails = new FormControl('');
    emailList: string[] = ['james@trezo.com', 'andy@trezo.com', 'mateo@trezo.com', 'luca@trezo.com', 'luca@trezo.com', 'tomato@trezo.com'];

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        public themeService: CustomizerSettingsService
    ) {}

}