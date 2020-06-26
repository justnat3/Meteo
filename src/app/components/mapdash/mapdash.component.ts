import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from 'src/app/Services/WeatherAPI/weather-api.service';
import { Weather } from 'src/types';
@Component({
  selector: 'app-mapdash',
  templateUrl: './mapdash.component.html',
  styleUrls: ['./mapdash.component.scss'],
})
export class MapdashComponent implements OnInit {
  constructor(private WeatherAPI: WeatherAPIService) {}
  res: Weather;
  ngOnInit(): void {
    this.weatherInfo();
  }
  // Update weatherInfo with zipcode default
  async weatherInfo() {
    // added zipcode input to getweather method
    (await this.WeatherAPI.getWeather()).subscribe((weather) => {
      this.res = weather;
    });
  }
  // // called from Parent to make another call to the service for updated information.
  // updateZipcode(zipcode: number) {
  //   this.weatherInfo(zipcode);
  // }
}
