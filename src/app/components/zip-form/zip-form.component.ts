import { Component, OnInit, Input } from '@angular/core';
import { Zipcode } from 'src/types'
@Component({
  selector: 'app-zip-form',
  templateUrl: './zip-form.component.html',
  styleUrls: ['./zip-form.component.scss']
})
export class ZipFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() zipcode: Zipcode;

  private postZipcode(zipcode: Zipcode) {
    if (!zipcode) {
      return console.error('This is not a valid entry')
    }
  }
}
