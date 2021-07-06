import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarPlateViewPipe } from './pipes/carPlate/car-plate-view.pipe';
import { PhoneViewPipe } from './pipes/phone/phone-view.pipe';
import { NameAbntViewPipe } from './pipes/nameABNT/name-abnt-view.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarPlateViewPipe,
    PhoneViewPipe,
    NameAbntViewPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
