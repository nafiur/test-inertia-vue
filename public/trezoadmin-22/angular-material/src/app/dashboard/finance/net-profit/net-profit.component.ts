import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NetProfitService } from './net-profit.service';

@Component({
    selector: 'app-net-profit',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './net-profit.component.html',
    styleUrl: './net-profit.component.scss'
})
export class NetProfitComponent {

    constructor(
        private netProfitService: NetProfitService
    ) {}

    ngOnInit(): void {
        this.netProfitService.loadChart();
    }

}