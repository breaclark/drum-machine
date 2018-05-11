import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sound } from './../models/sounds.model';

@Component({
  selector: 'app-manipulate-beat',
  templateUrl: './manipulate-beat.component.html',
  styleUrls: ['./manipulate-beat.component.css']
})
export class ManipulateBeatComponent {
  @Input() childBeats: Sound[][];
  @Input() childKit: string[];
  @Output() clearSender = new EventEmitter();
  currentlyPlaying = false;
  stopPlaying = false;
  bpmSlider = 100;
  currentBeat = 0;
  playBeat(i: number) {
    this.currentBeat = i + 1;
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
      }, (60000/this.bpmSlider));
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
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])],
    [new Sound("kick", this.childKit[0]),
    new Sound("snare", this.childKit[1]),
    new Sound("high-hat-open", this.childKit[2]),
    new Sound("high-hat-closed", this.childKit[3])]];
    this.clearSender.emit(freshBeats);
  }

}
