import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-windspeed',
  templateUrl: './windspeed.component.html',
  styleUrls: ['./windspeed.component.scss'],
})
export class WindspeedComponent {
  @Input() windspeed: number;
}
