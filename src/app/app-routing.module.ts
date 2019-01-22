import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './static/about/about.component';
import { CateringComponent } from './static/catering/catering.component';
import { EventsComponent } from './static/events/events.component';
import { ContactComponent } from './static/contact/contact.component';

const routes: Routes = [
  //Homepage
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  //Static Pages ----- about - catering - events - contact
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'catering',
    component: CateringComponent
  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
