import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class WeatherAPIService {
  key: string = '9ab7a8e9725f93fe5b641a6a4c794d14';

  constructor(private http: HttpClient) {}

  public getWeather(zipcode: number): Observable<Weather> {
    return this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${zipcode},us&units=imperial&appid=${this.key}`
      )
      .pipe(
        map((s: Object) => {
          const result: any = JSON.parse(JSON.stringify(s));
          return {
            temp: parseFloat(result.main.temp.toFixed(1)),
            description: result.weather,
            windspeed: Math.floor(result.wind.speed),
            humidity: result.main.humidity,
            alert: result.weather.main,
            townName: result.name,
          };
        })
      );
  }
}
