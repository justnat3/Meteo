import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertClientComponent } from './components/alert-client/alert-client.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';
import { MatFormeComponent } from './components/mat-forme/mat-forme.component';
import { HttpClientModule } from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'

@NgModule({
  declarations: [
    AppComponent,
    AlertClientComponent,
    DashboardComponent,
    MapComponent,
    MatFormeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
