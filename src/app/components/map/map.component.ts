import { environment } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from 'mapbox-gl-geocoder';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  // style = 'mapbox://styles/justnat3/ckbo77m9b2kai1jp91a37p0wm';
  style = 'mapbox://styles/mapbox/satellite-streets-v11';
  lat = 37.75;
  lng = -122.41;

  source: any;
  markers: any;
  ngOnInit() {
    
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
    });
    // this.markers = this.map.GetMarkers()
    
    this.initializeMap()
    console.log(this.initializeMap())  
    this.addressBook()
  }  
public initializeMap() {
  if (this.map.navigator.geolocation) {
    this.map.navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude
      this.lng = position.coords.longitude
      this.map.flyTo({
        center: [this.lng, this.lat]
      })
    })
  }
}
private addressBook(){
  this.map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
    );
}

  }
