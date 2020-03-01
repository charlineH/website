import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MassageComponent } from './pages/massage/massage.component';
import { TaichiComponent } from './pages/taichi/taichi.component';
import { GallerieComponent } from './pages/gallerie/gallerie.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutComponent } from './pages/about/about.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MultipleImgBandComponent } from './components/multiple-img-band/multiple-img-band.component';
import { ImgBandComponent } from './components/img-band/img-band.component';
import { OnTopComponent } from './components/on-top/on-top.component';
import { ShiatsuComponent } from './pages/shiatsu/shiatsu.component';
import { ClickOutsideDirective } from './directive/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MassageComponent,
    TaichiComponent,
    GallerieComponent,
    ContactComponent,
    ArticleComponent,
    AboutComponent,
    NavBarComponent,
    MultipleImgBandComponent,
    ImgBandComponent,
    OnTopComponent,
    ShiatsuComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
