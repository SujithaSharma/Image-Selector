import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagecarouselComponent } from './components/imagecarousel/imagecarousel.component';
import { DatacardsComponent } from './components/imagecarousel/datacards/datacards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImagecarouselComponent,
    DatacardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
