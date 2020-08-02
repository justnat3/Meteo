import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
// import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from '../../../environments/environment';
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

  // mark: any;

  Map() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 9,
      center: [this.lng, this.lat],
    }); 
    // setTimeout(() => {
    //   // this.onLoad()
    // }, 2);
  }
  // click(){
  //   this.map.on('click', (event) => {
  //     let coords = {
  //         lat: event.lngLat.lat,
  //         lng: event.lngLat.lng
  //       }
  //       console.log(coords)
  //   });
  // }

  // onLoad(){
  //   this.map.on('load', this.clickevent.bind(this))
  // }


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
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          let lat = (this.lat = coords.latitude);
          let lng = (this.lng = coords.longitude);
          resolve({ lat, lng });
        },
        (error) => {
          resolve({
            lat: 51,
            lng: 0,
          });
        }
      );
    });
  }

// async test(){
//   let coords = {
//     lat: 22,
//     lng: 22
//   }
//   coords = await this.clickevent()
// }

  //  clickevent(): Promise<{ lat: number; lng: number }> {
  //   return new Promise((resolve, reject) => {
  //     this.map.on('click', function (event, error) {

  //       let coords = {
  //         lat: event.lngLat.lat,
  //         lng: event.lngLat.lng
  //       }
  //       resolve(coords)
  //       if (error) reject(error);
  //     })
  //   })
  // }
}
