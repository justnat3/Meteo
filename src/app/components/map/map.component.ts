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

  load() {
    setTimeout(() => {
      //this.MapAPI.clickname()
      this.MapAPI.Map();
      this.MapAPI.seeUser();
      // 
    }, 10);
  }

}
