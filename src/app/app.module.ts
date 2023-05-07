import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StringConstants } from 'src/stringConstants';
import { EventsComponent } from './events/events.component';
import { FeatureComponent } from './feature/feature.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    FeatureComponent,
    SponsorshipComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [
    StringConstants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
