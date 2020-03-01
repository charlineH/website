import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MassageComponent } from './pages/massage/massage.component';
import { TaichiComponent } from './pages/taichi/taichi.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { GallerieComponent } from './pages/gallerie/gallerie.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'massage', component: MassageComponent},
  {path: 'taichi', component: TaichiComponent},
  {path: 'apropos', component: AboutComponent},
  // FIXME: uncomment when gallerie is ready.
  // {path: 'gallerie', component: GallerieComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
