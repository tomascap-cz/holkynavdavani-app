import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ReferenceDetailComponent } from './reference-detail/reference-detail.component';
import { ReferenceComponent } from './reference/reference.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'uvod', pathMatch: 'full' },
  { path: 'uvod', component: HomeComponent },
  { path: 'o-nas', component: AboutComponent },
  { path: 'sluzby', component: ServicesComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'reference/:couple', component: ReferenceDetailComponent},
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }