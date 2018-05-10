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
  stopPlaying = false;

  playBeat(i: number) {
    this.currentlyPlaying = true;
    if(i < this.childBeats.length && this.stopPlaying === false) {
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
    } else if (i === this.childBeats.length && this.stopPlaying === false) {
      this.playBeat(0);
    } else {
      this.currentlyPlaying = false;
      this.stopPlaying = false;
    }
  }

  stopBeat() {
    this.stopPlaying = true;
  }

  clearBeat() {
    console.log("clear");
  }

}
