import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-marketing-tool',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './marketing-tool.component.html',
    styleUrl: './marketing-tool.component.scss'
})
export class MarketingToolComponent {}