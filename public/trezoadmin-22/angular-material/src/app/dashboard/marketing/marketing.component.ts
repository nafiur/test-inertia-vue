import { Component } from '@angular/core';
import { AdSpendComponent } from './ad-spend/ad-spend.component';
import { CostPerThousandComponent } from './cost-per-thousand/cost-per-thousand.component';
import { CostPerClickComponent } from './cost-per-click/cost-per-click.component';
import { ClickThroughRateComponent } from './click-through-rate/click-through-rate.component';
import { MarketingToolComponent } from './marketing-tool/marketing-tool.component';
import { InstagramSubscriberComponent } from './instagram-subscriber/instagram-subscriber.component';
import { PerformanceOverviewComponent } from './performance-overview/performance-overview.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ChannelsComponent } from './channels/channels.component';
import { ExternalLinksComponent } from './external-links/external-links.component';
import { InstagramCampaignsComponent } from './instagram-campaigns/instagram-campaigns.component';

@Component({
    selector: 'app-marketing',
    standalone: true,
    imports: [AdSpendComponent, CostPerThousandComponent, CostPerClickComponent, ClickThroughRateComponent, PerformanceOverviewComponent, MobileAppComponent, HighlightsComponent, CampaignsComponent, ChannelsComponent, ExternalLinksComponent, InstagramCampaignsComponent, MarketingToolComponent, InstagramSubscriberComponent],
    templateUrl: './marketing.component.html',
    styleUrl: './marketing.component.scss'
})
export class MarketingComponent {}