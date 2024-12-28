import { Component } from '@angular/core';
import { ActiveTotalPropertyComponent } from './active-total-property/active-total-property.component';
import { ReRevenueComponent } from './re-revenue/re-revenue.component';
import { NewSoldPropertiesComponent } from './new-sold-properties/new-sold-properties.component';
import { PropertiesForSaleComponent } from './properties-for-sale/properties-for-sale.component';
import { PropertiesForRentComponent } from './properties-for-rent/properties-for-rent.component';
import { NewCustomersMonthComponent } from './new-customers-month/new-customers-month.component';
import { MostSalesLocationComponent } from './most-sales-location/most-sales-location.component';
import { RentalIncomeComponent } from './rental-income/rental-income.component';
import { SocialSearchComponent } from './social-search/social-search.component';
import { RecentPropertyComponent } from './recent-property/recent-property.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { TopPropertyComponent } from './top-property/top-property.component';
import { LatestTransactionsComponent } from './latest-transactions/latest-transactions.component';

@Component({
    selector: 'app-real-estate',
    standalone: true,
    imports: [ActiveTotalPropertyComponent, ReRevenueComponent, NewSoldPropertiesComponent, PropertiesForSaleComponent, PropertiesForRentComponent, NewCustomersMonthComponent, MostSalesLocationComponent, RentalIncomeComponent, SocialSearchComponent, RecentPropertyComponent, CustomerReviewsComponent, TopPropertyComponent, LatestTransactionsComponent],
    templateUrl: './real-estate.component.html',
    styleUrl: './real-estate.component.scss'
})
export class RealEstateComponent {}