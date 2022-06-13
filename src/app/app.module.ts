import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { PopularComponent } from './popular/popular.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, SearchComponent, NavbarComponent, FooterComponent, MyGalleryComponent, PodcastsComponent, PopularComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
