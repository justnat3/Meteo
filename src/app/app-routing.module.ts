import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';
import { MapdashComponent } from './components/mapdash/mapdash.component';

const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'map', component: MapComponent },
  { path: 'mapdash', component: MapdashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
