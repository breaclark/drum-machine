import { Component } from '@angular/core';
import { Sound } from './models/sounds.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Drum Machine';
  beats : Sound[] = [new Sound("kick", "fakekickfilepath"), new Sound("snare","fakesnarefilepath"), new Sound("high-hat","fakehigh-hatfilepath")];
}
