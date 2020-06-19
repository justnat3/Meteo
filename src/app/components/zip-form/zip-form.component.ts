import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zip-form',
  templateUrl: './zip-form.component.html',
  styleUrls: ['./zip-form.component.scss'],
})
export class ZipFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  zip = new FormControl('', Validators.required);
  getErrorMessage() {
    return this.zip.hasError('required')
      ? 'You must enter a value'
      : this.zip.hasError('zip')
      ? 'Not a valid zipcode'
      : '';
  }
}
