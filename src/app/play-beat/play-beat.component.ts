import { Component, Input } from '@angular/core';
import { Sound } from './../models/sounds.model';

@Component({
  selector: 'app-play-beat',
  templateUrl: './play-beat.component.html',
  styleUrls: ['./play-beat.component.css']
})
export class PlayBeatComponent {
  @Input() childBeats: Sound[][];

  playBeat() {
    console.log("hi");
  }

}
