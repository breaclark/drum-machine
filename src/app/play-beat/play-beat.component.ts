import { Component, Input } from '@angular/core';
import { Sound } from './../models/sounds.model';

@Component({
  selector: 'app-play-beat',
  templateUrl: './play-beat.component.html',
  styleUrls: ['./play-beat.component.css']
})
export class PlayBeatComponent {
  @Input() childBeats: Sound[][];
  currentlyPlaying = false;

  playBeat(i: number) {
    this.currentlyPlaying = true;
    if(i < this.childBeats.length) {
      for(let j=0; j<this.childBeats[i].length; j++) {
        if (this.childBeats[i][j].switch === true) {
          let audioPlayer = <HTMLVideoElement> document.getElementById("sound" + "-" + i + "-" + j);
          audioPlayer.play();
        }
      }
      i = i + 1;
      setTimeout(() => {
        this.playBeat(i);
      }, 350);
    }
    else {
      this.currentlyPlaying = false;
    }
  }

}
