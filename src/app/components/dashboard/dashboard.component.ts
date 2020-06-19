import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from 'src/app/Services/WeatherAPI/weather-api.service';
import { Weather } from 'src/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  temp: number;

  constructor(private WeatherAPI: WeatherAPIService) {}

  res: Weather;
  ngOnInit(): void {
    this.WeatherInfo();
  }
  public WeatherInfo() {
    this.WeatherAPI.getWeather().subscribe((weather) => {
      this.res = weather;
      console.log(this.res.description);
    });
  }
}
