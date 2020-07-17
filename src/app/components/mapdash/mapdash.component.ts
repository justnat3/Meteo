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
  block: any
  
  ngOnInit(): void {
    this.weatherInfo();
  }
  
  // Update weatherInfo with zipcode default
  async weatherInfo() {
    // added zipcode input to getweather method
    (await this.WeatherAPI.getWeather()).subscribe((weather) => {
      this.res = weather;
      // reduce res.alert array to weatherDescription to display description value instead of description array. Mapping this value to a mapped array does not work
      this.block = this.res.alert.reduce(() => {
        description: this.block.main
        }) 
      if (this.block.description == 'clear sky') {
        return this.block.description = 'clear skys'
        }
      else {
        return this.block.description = 'No Info' 
      }
    });
  }
  // called from Parent to make another call to the service for updated information.
  // updateZipcode(zipcode: number) {
  //   this.weatherInfo(zipcode);
  // }
}
