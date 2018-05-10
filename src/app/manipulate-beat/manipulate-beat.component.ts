import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sound } from './../models/sounds.model';

@Component({
  selector: 'app-manipulate-beat',
  templateUrl: './manipulate-beat.component.html',
  styleUrls: ['./manipulate-beat.component.css']
})
export class ManipulateBeatComponent {
  @Input() childBeats: Sound[][];
  @Output() clearSender = new EventEmitter();
  currentlyPlaying = false;
  stopPlaying = false;
  kickLink = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/kick.mp3";
  snareLink = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/snare.mp3";
  hhoLink = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/high-hat-open.mp3";
  hhcLink = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/high-hat-closed.mp3";

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
    if(this.currentlyPlaying === true) {
      this.stopPlaying = true;
    }
    let freshBeats : Sound[] [] = [
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)],
    [new Sound("kick", this.kickLink),
    new Sound("snare", this.snareLink),
    new Sound("high-hat-open", this.hhoLink),
    new Sound("high-hat-closed", this.hhcLink)]];
    this.clearSender.emit(freshBeats);
  }

}
