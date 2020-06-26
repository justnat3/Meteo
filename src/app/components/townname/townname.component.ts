import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-townname',
  templateUrl: './townname.component.html',
  styleUrls: ['./townname.component.scss'],
})
export class TownnameComponent {
  @Input() townName: string;
}
