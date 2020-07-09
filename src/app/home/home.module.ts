import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './header/navigation-bar/navigation-bar.component';
import { LayoutComponent } from './header/layout/layout.component';
import { OfferCardComponent } from './what-we-offer/offer-card/offer-card.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],

  declarations: [
    HomeComponent,
    HeaderComponent,
    WhoWeAreComponent,
    WhatWeOfferComponent,
    PricingComponent,
    PricingComponent,
    SubscriptionComponent,
    FooterComponent,
    NavigationBarComponent,
    LayoutComponent,
    OfferCardComponent
  ],

  exports: [
    WhoWeAreComponent
  ]
})
export class HomeModule { }
