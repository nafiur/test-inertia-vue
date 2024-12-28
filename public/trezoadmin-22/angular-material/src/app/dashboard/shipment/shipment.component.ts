import { Component } from '@angular/core';
import { TotalRevenueComponent } from './total-revenue/total-revenue.component';
import { TotalShipmentComponent } from './total-shipment/total-shipment.component';
import { TotalCustomerComponent } from './total-customer/total-customer.component';
import { TotalOrderComponent } from './total-order/total-order.component';
import { ShipmentDeliveredComponent } from './shipment-delivered/shipment-delivered.component';
import { AverageDeliveryTimeComponent } from './average-delivery-time/average-delivery-time.component';
import { LiveShipmentStatusComponent } from './live-shipment-status/live-shipment-status.component';
import { TopCountriesComponent } from './top-countries/top-countries.component';
import { TrackingOrderComponent } from './tracking-order/tracking-order.component';
import { ChatComponent } from './chat/chat.component';
import { TopShippingMethodsComponent } from './top-shipping-methods/top-shipping-methods.component';
import { TodaysShipmentsComponent } from './todays-shipments/todays-shipments.component';
import { OnTimeDeliveryComponent } from './on-time-delivery/on-time-delivery.component';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';

@Component({
    selector: 'app-shipment',
    standalone: true,
    imports: [TotalRevenueComponent, TotalShipmentComponent, TotalCustomerComponent, TotalOrderComponent, ShipmentDeliveredComponent, AverageDeliveryTimeComponent, LiveShipmentStatusComponent, TopCountriesComponent, TrackingOrderComponent, ChatComponent, TopShippingMethodsComponent, TodaysShipmentsComponent, OnTimeDeliveryComponent, ShipmentListComponent],
    templateUrl: './shipment.component.html',
    styleUrl: './shipment.component.scss'
})
export class ShipmentComponent {}