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
    this.load();
  }

  click() {}

  load() {
    setTimeout(() => {
      this.MapAPI.Map();
      this.MapAPI.seeUser();
      // this.MapAPI.justmapit();
      this.MapAPI.clickPopUp();
    }, 1);
  }
}
