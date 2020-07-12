import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
// import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from '../../../environments/environment';
import { EventEmitter } from 'protractor';
// import { map, mapTo } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GeoCodeService {
  constructor() {}

  // Initialize Mapbox Map
  map: mapboxgl.Map;
  style = 'mapbox://styles/justnat3/ckbvih3g806ic1ipc1s56o8ml';
  lat = 51;
  lng = 0;
  latClick: number;
  lonClick: number;
  // mark: any;

  Map() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 9,
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
        // console.log('suck')
        let lat = (this.lat = coords.latitude);
        let lng = (this.lng = coords.longitude);
        resolve({ lat, lng });
      }, (error) => {
        // console.log()
        resolve({
          lat: 51,
          lng: 0
        });
      });
    });
  }
  clickevent(): Promise<{ lat: number; lng: number }> {
    return new Promise((resolve, reject) => {
      this.map.on('click', (event, error) => {
        
        let coords = {
          lat: event.lngLat.lat,
          lng: event.lngLat.lng
        }
        resolve(coords)
        // let lng = eve.lngLat.lng
        // let lat = eve.lngLat.lat
        if (error) reject(error);
      })
    })
  }
}
