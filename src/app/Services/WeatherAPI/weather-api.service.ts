import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  key: string = '9ab7a8e9725f93fe5b641a6a4c794d14';
  zipcode: number;
  country_code: string;
  

  constructor(private http: HttpClient) { }

  public getWeather(): Observable<Weather> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=10033,us&appid=9ab7a8e9725f93fe5b641a6a4c794d14`)
      .pipe(map((s: Object) => {
        const result: any = JSON.parse(JSON.stringify(s));
        return {
          temp: this.convertTemp(result.main.temp),
          coord: result.coord,
          windspeed: result.wind,
          humidity: result.main.humidity,
          alert: result.weather.main
        };
      }));
  }

  convertTemp(temp: number) {
    const kelvin = 310.15;
    const feh = (kelvin - temp) * 9 / 5 + 32
    return parseFloat(feh.toFixed(1));
  }
}
