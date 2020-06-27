import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GeoCodeService {
  constructor() {}

  map: mapboxgl.Map;
  style = 'mapbox://styles/justnat3/ckbo77m9b2kai1jp91a37p0wm';
  // style = 'mapbox://styles/mapbox/satellite-streets-v11';
  // style = 'mapbox://styles/justnat3/ckbvih3g806ic1ipc1s56o8ml';
  lat = 37.75;
  lng = -122.41;

  source: any;
  markers: any;

  justmapit() {
    this.map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );
  }
  mapmap() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat],
    });
  }
  seeUser() {
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }

  getCoords(): Promise<{ lat: number; lng: number }> {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const lat = (this.lat = coords.latitude);
        const lng = (this.lng = coords.longitude);
        resolve({ lat, lng });
      });
    });
  }
}
