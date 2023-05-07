import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { MessageComponent } from './message/message.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'feature', component:FeatureComponent},
  {path:'message', component:MessageComponent},
  {path:'sponsorship', component:SponsorshipComponent},
  {path:'events', component:EventsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
