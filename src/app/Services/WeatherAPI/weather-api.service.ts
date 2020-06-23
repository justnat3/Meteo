import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from 'src/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherAPIService {
  constructor(private http: HttpClient) {}

  key = environment.APIKey.WeatherKey;

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
