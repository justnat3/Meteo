import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zip-form',
  templateUrl: './zip-form.component.html',
  styleUrls: ['./zip-form.component.scss'],
})
export class ZipFormComponent {
  // @output create event emitter for zipcode that is of type int an call it updatedzipcode. This is used for the emit method.
  @Output() zipcodeUpdated = new EventEmitter<number>();
  zipcode: number;

  // Submit method called in ComponentHTML to emit the change in zipcode above ngModel
  submit() {
    // zipcodeUpdated referenced in parent component
    this.zipcodeUpdated.emit(this.zipcode);
  }

  zip = new FormControl('', Validators.required);
  getErrorMessage() {
    return this.zip.hasError('required')
      ? 'You must enter a value'
      : this.zip.hasError('zip')
      ? 'Not a valid zipcode'
      : '';
  }
}
