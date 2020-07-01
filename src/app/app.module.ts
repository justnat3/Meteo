import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertClientComponent } from './components/alert-client/alert-client.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZipFormComponent } from './components/zip-form/zip-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MapdashComponent } from './components/mapdash/mapdash.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DegreesComponent } from './components/degrees/degrees.component';
import { WindspeedComponent } from './components/windspeed/windspeed.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { TownnameComponent } from './components/townname/townname.component';
import { WheatherpictureComponent } from './components/wheatherpicture/wheatherpicture.component';
import { LandhereComponent } from './landhere/landhere.component';
import { NavComponent } from './nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    AlertClientComponent,
    // DashboardComponent,
    MapComponent,
    ZipFormComponent,
    MapdashComponent,
    DegreesComponent,
    WindspeedComponent,
    HumidityComponent,
    TownnameComponent,
    WheatherpictureComponent,
    LandhereComponent,
    NavComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
