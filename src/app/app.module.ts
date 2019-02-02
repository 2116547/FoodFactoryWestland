import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutComponent } from './static/about/about.component';
import { CateringComponent } from './static/catering/catering.component';
import { EventsComponent } from './static/events/events.component';
import { ContactComponent } from './static/contact/contact.component';
import { IndexComponent } from './webshop/index/index.component';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { from } from 'rxjs';
import { AuthService } from './services/auth-service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CateringComponent,
    EventsComponent,
    ContactComponent,
    IndexComponent,
    CarouselComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
