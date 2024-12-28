import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TasksOverviewService } from './tasks-overview.service';

@Component({
    selector: 'app-tasks-overview',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './tasks-overview.component.html',
    styleUrl: './tasks-overview.component.scss'
})
export class TasksOverviewComponent {

    constructor(
        private tasksOverviewService: TasksOverviewService
    ) {}

    ngOnInit(): void {
        this.tasksOverviewService.loadChart();
    }

}