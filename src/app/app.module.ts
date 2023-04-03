import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { BagMapComponent } from './bag-map/bag-map.component';

@NgModule({
  declarations: [
    AppComponent,
    BagMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgxMapLibreGLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
