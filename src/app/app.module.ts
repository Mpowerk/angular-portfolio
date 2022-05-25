import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { QualityComponent } from './Components/quality/quality.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { MyServicesComponent } from './Components/my-services/my-services.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { ContactformComponent } from './Components/contactform/contactform.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ScrollButtonComponent } from './Components/scroll-button/scroll-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    QualityComponent,
    SkillsComponent,
    MyServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactformComponent,
    FooterComponent,
    NavbarComponent,
    ScrollButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
