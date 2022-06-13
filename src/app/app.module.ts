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
import { MyGalleryListComponent } from './my-gallery/my-gallery-list/my-gallery-list.component';
import { MyGalleryDetailComponent } from './my-gallery/my-gallery-detail/my-gallery-detail.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, SearchComponent, NavbarComponent, FooterComponent, MyGalleryComponent, MyGalleryListComponent, MyGalleryDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
