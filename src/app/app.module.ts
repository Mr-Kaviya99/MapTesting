import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AgmCoreModule} from "@agm/core";
import { GetCurrentLocationComponent } from './get Current Location/get-current-location/get-current-location.component';

@NgModule({
  declarations: [
    AppComponent,
    GetCurrentLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChTFGjMCRixSy3lNDf5zovNk6b4L3VwIo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
