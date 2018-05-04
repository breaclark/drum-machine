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
    for(let i=0; i<this.childBeats.length; i++) {
      for(let j=0; j<this.childBeats[i].length; j++) {
        if (this.childBeats[i][j].switch === true) {

          let audioPlayer = <HTMLVideoElement> document.getElementById("sound" + "-" + i + "-" + j);
          audioPlayer.play();
        }
      }
      //then wait for a bit, going to have to recurse
    }
  }

}
