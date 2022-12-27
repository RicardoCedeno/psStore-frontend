import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{NgImageSliderModule} from 'ng-image-slider'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { AvailableproductsComponent } from './components/availableproducts/availableproducts.component';
import { ExpectedgamesComponent } from './components/expectedgames/expectedgames.component';
import { SliderComponent } from './components/slider/slider.component';
import { Slider2Component } from './components/slider2/slider2.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Welcome2Component } from './components/welcome2/welcome2.component';
import { MoreComponent } from './components/more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    AvailableproductsComponent,
    ExpectedgamesComponent,
    SliderComponent,
    Slider2Component,
    WelcomeComponent,
    Welcome2Component,
    MoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
