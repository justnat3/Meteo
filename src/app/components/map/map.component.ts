import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // public MapboxInterface() {
  //   let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

  //   mapboxgl.accessToken =
  //     'pk.eyJ1IjoianVzdG5hdDMiLCJhIjoiY2tibHRrcXVsMWNydzJvcW5uMmx5cjM3NiJ9.kb1t-Pnwm4g_JDwgQrKIZA';
  //   let map = new mapboxgl.Map({
  //     container: 'YOUR_CONTAINER_ELEMENT_ID',
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //   });
  // }
}
