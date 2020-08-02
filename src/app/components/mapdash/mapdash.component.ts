import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from 'src/app/Services/WeatherAPI/weather-api.service';
import { Weather } from 'src/types';
import { GeoCodeService } from 'src/app/Services/MapAPI/geo-code.service';

@Component({
  selector: 'app-mapdash',
  templateUrl: './mapdash.component.html',
  styleUrls: ['./mapdash.component.scss'],
})

export class MapdashComponent implements OnInit {
  
  constructor(private WeatherAPI: WeatherAPIService, private MapAPI: GeoCodeService) {}
  res: Weather;
  block: any
  
  ngOnInit(): void {
    this.weatherInfo();
  } 
  // Update weatherInfo with zipcode default
  async weatherInfo() {
    // added zipcode input to getweather method
    (await this.WeatherAPI.getWeather()).subscribe((weather) => {
      this.res = weather;
      this.block = this.res.alert.reduce(() => {
        description: this.block.main
        main: this.res.alert.main
        }) 
      if (this.block.description == 'clear sky') {
        return this.block.description = 'clear skies'
        }
      else {
        return this.block.main 
      }
    });
  }
}
