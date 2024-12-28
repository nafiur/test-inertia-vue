import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-campaigns',
    standalone: true,
    imports: [MatCardModule, RouterModule, MatButtonModule, NgIf, NgClass, MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatRadioModule, FileUploadModule, MatSelectModule, MatSliderModule, MatMenuModule],
    templateUrl: './campaigns.component.html',
    styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {

    // File Uploader
    public multiple: boolean = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    displayedColumns: string[] = ['info', 'socials', 'status', 'assignees', 'link'];
    dataSource = ELEMENT_DATA;

    currentTab = 'tab1'; // Default tab
    filteredData = this.dataSource; // Default filtered data

    // Derived data
    pendingData = this.dataSource.filter(
        item => item.status.reviewing || item.status.paused
    );
    completedData = this.dataSource.filter(
        item => item.status.liveNow
    );

    switchTab(event: MouseEvent, tab: string): void {
        event.preventDefault();
        this.currentTab = tab;
        if (tab === 'tab1') {
            this.filteredData = this.dataSource; // Show all data
        } else if (tab === 'tab2') {
            this.filteredData = this.pendingData; // Show Pending tab data
        } else if (tab === 'tab3') {
            this.filteredData = this.completedData; // Show Completed tab data
        }
    }

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

    // Range Slider
    startValue: number = 18; // Initial value for the left thumb
    endValue: number = 30;   // Initial value for the right thumb
    onThumbChange(event: any, thumb: 'start' | 'end'): void {
        const value = event.target.value; // Get the current value of the thumb being dragged
        if (thumb === 'start') {
            this.startValue = Number(value); // Update the start value
        } else if (thumb === 'end') {
            this.endValue = Number(value); // Update the end value
        }
    }
    formatValue(value: number): string {
        return `${value}`; // Optional: Format the value for display
    }

}

export interface PeriodicElement {
    info: any;
    socials: any;
    status: any;
    assignees: any;
    link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        info: {
            title: `Christmas Eve`,
            date: `From 10 Oct - 15 Oct, 24`
        },
        socials: {
            item: [
                {
                    icon: 'images/icons/facebook3.svg',
                    link: '#'
                },
                {
                    icon: 'images/icons/instagram2.svg',
                    link: '#'
                },
                {
                    icon: 'images/icons/google3.svg',
                    link: '#'
                },
                {
                    icon: 'images/icons/linkedin2.svg',
                    link: '#'
                }
            ]
        },
        status: {
            liveNow: true,
            reviewing: false,
            paused: false
        },
        assignees: {
            images: [
                {
                    img: 'images/users/user53.jpg'
                },
                {
                    img: 'images/users/user54.jpg'
                },
                {
                    img: 'images/users/user56.jpg'
                },
                {
                    img: 'images/users/user57.jpg'
                }
            ],
            number: '+3'
        },
        link: 'ri-arrow-right-line'
    },
    {
        info: {
            title: `Teacher’s Day`,
            date: `From 08 Oct - 12 Oct, 24`
        },
        socials: {
            item: [
                {
                    icon: 'images/icons/facebook3.svg',
                    link: '#'
                },
                {
                    icon: 'images/icons/instagram2.svg',
                    link: '#'
                }
            ]
        },
        status: {
            liveNow: false,
            reviewing: true,
            paused: false
        },
        assignees: {
            images: [
                {
                    img: 'images/users/user52.jpg'
                },
                {
                    img: 'images/users/user51.jpg'
                },
                {
                    img: 'images/users/user50.jpg'
                }
            ]
        },
        link: 'ri-arrow-right-line'
    },
    {
        info: {
            title: `ThanksGiving`,
            date: `From 01 Oct - 05 Oct, 24`
        },
        socials: {
            item: [
                {
                    icon: 'images/icons/facebook3.svg',
                    link: '#'
                },
                {
                    icon: 'images/icons/google3.svg',
                    link: '#'
                },
                {
                    icon: 'images/icons/linkedin2.svg',
                    link: '#'
                }
            ]
        },
        status: {
            liveNow: false,
            reviewing: false,
            paused: true
        },
        assignees: {
            images: [
                {
                    img: 'images/users/user1.jpg'
                },
                {
                    img: 'images/users/user2.jpg'
                }
            ]
        },
        link: 'ri-arrow-right-line'
    },
    {
        info: {
            title: `Team Gateway`,
            date: `From 05 Oct - 17 Oct, 24`
        },
        socials: {
            item: [
                {
                    icon: 'images/icons/google3.svg',
                    link: '#'
                }
            ]
        },
        status: {
            liveNow: true,
            reviewing: false,
            paused: false
        },
        assignees: {
            images: [
                {
                    img: 'images/users/user3.jpg'
                },
                {
                    img: 'images/users/user4.jpg'
                },
                {
                    img: 'images/users/user5.jpg'
                }
            ],
        },
        link: 'ri-arrow-right-line'
    },
    {
        info: {
            title: `Halloween`,
            date: `From 20 Oct - 31 Oct, 24`
        },
        socials: {
            item: [
                {
                    icon: 'images/icons/facebook3.svg',
                    link: '#'
                },
                {
                    icon: 'images/icons/instagram2.svg',
                    link: '#'
                },
                {
                    icon: 'images/icons/google3.svg',
                    link: '#'
                },
                {
                    icon: 'images/icons/linkedin2.svg',
                    link: '#'
                }
            ]
        },
        status: {
            liveNow: false,
            reviewing: true,
            paused: false
        },
        assignees: {
            images: [
                {
                    img: 'images/users/user45.jpg'
                },
                {
                    img: 'images/users/user46.jpg'
                },
                {
                    img: 'images/users/user47.jpg'
                }
            ]
        },
        link: 'ri-arrow-right-line'
    }
];