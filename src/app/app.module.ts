import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutComponent } from './static/about/about.component';
import { CateringComponent } from './static/catering/catering.component';
import { EventsComponent } from './static/events/events.component';
import { ContactComponent } from './static/contact/contact.component';
import { IndexComponent } from './webshop/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CateringComponent,
    EventsComponent,
    ContactComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
