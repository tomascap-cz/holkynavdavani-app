import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DividerComponent } from './shared/components/divider/divider.component';
import { HeaderComponent } from './home/header/header.component';
import { GridComponent } from './shared/components/grid/grid.component';
import { TextWithSideImageComponent } from './shared/components/text-with-side-image/text-with-side-image.component';
import { ContactComponent } from './home/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageHeadingComponent } from './shared/components/page-heading/page-heading.component';
import { ServicesComponent } from './services/services.component';
import { TextWithTwoImagesComponent } from './shared/components/text-with-two-images/text-with-two-images.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContentService } from './shared/services/content/content.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './shared/components/card/card.component';
import { BlogComponent } from './blog/blog.component';
import { HamburgerToggleDirective } from './shared/directives/hamburger-toggle.directive';
import { ReferenceDetailComponent } from './reference-detail/reference-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DividerComponent,
    HeaderComponent,
    GridComponent,
    TextWithSideImageComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    PageHeadingComponent,
    ServicesComponent,
    TextWithTwoImagesComponent,
    ReferenceComponent,
    CardComponent,
    BlogComponent,
    HamburgerToggleDirective,
    ReferenceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
