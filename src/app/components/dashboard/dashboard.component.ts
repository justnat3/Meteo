import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
// constructor(private WeatherAPI: WeatherAPIService) {}
// res: Weather;
// ngOnInit(): void {
//   this.weatherInfo();
// }
// // Update weatherInfo with zipcode default
// weatherInfo(zipcode = 10032) {
//   // added zipcode input to getweather method
//   this.WeatherAPI.getWeather(zipcode).subscribe((weather) => {
//     this.res = weather;
//     // console.log(this.res.description);
//   });
// }
// called from Parent to make another call to the service for updated information.
// updateZipcode(zipcode: number) {
// console.log('updating');
// this.weatherInfo(zipcode);
//   }
// }
