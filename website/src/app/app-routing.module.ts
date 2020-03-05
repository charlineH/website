import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MassageComponent } from './pages/massage/massage.component';
import { TaichiComponent } from './pages/taichi/taichi.component';
import { AboutComponent } from './pages/about/about.component';
import { RoutesPath } from './enum/routes.enum';

const routes: Routes = [
  {path: RoutesPath.HOME, component: HomeComponent},
  {path: RoutesPath.MASSAGE, component: MassageComponent},
  {path: RoutesPath.TAICHI, component: TaichiComponent},
  {path: RoutesPath.A_PROPOS, component: AboutComponent},
  // FIXME: uncomment when gallerie is ready.
  // {path: RoutesPath.GALLERY, component: GallerieComponent}
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
