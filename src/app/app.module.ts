import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarPlateViewPipe } from './pipes/carPlate/car-plate-view.pipe';
import { PhoneBrViewPipe } from './pipes/phoneBR/phone-br-view.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarPlateViewPipe,
    PhoneBrViewPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
