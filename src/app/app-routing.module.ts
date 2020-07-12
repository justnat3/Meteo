import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { MapdashComponent } from './components/mapdash/mapdash.component';
// import { AboutpageComponent } from './components/aboutpage/aboutpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'map', component: MapComponent },
  {path: 'dashboard', component: MapdashComponent},
  // {path: 'about', component: AboutpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
