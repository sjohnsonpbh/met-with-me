import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MyGalleryDetailComponent } from './my-gallery/my-gallery-detail/my-gallery-detail.component';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'my-gallery',
    component: MyGalleryComponent,
    children: [
      {
        path: ':id',
        component: MyGalleryDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
