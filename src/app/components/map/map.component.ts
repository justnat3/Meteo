import { Component, OnInit } from '@angular/core';
import { GeoCodeService } from 'src/app/Services/MapAPI/geo-code.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private MapAPI: GeoCodeService) {}

  ngOnInit() {
    this.Map();
    this.SeeUser();
  }

  Map() {
    this.MapAPI.mapmap();
  }

  SeeUser() {
    this.MapAPI.seeUser();
  }
}
