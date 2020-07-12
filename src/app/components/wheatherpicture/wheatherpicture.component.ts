import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wheatherpicture',
  templateUrl: './wheatherpicture.component.html',
  styleUrls: ['./wheatherpicture.component.scss']
})
export class WheatherpictureComponent {

  @Input() description: string;

}
