import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sound } from './../models/sounds.model';

@Component({
  selector: 'app-list-beat-intervals',
  templateUrl: './list-beat-intervals.component.html',
  styleUrls: ['./list-beat-intervals.component.css']
})
export class ListBeatIntervalsComponent {
  @Input() childBeats: Sound[][];
  @Output() beatsSender = new EventEmitter();

  editBeat(indices: number[]) {
    let beatIndex = indices[0];
    let soundIndex = indices[1];
    if(this.childBeats[beatIndex][soundIndex].switch) {
      this.childBeats[beatIndex][soundIndex].switch = false;
      this.childBeats[beatIndex][soundIndex].switchImg = "./../../assets/switch-off.png";
    } else {
      this.childBeats[beatIndex][soundIndex].switch = true;
      this.childBeats[beatIndex][soundIndex].switchImg = "./../../assets/switch-on.png";
    }
    this.beatsSender.emit(this.childBeats);
  }

  snareClick() {
    console.log("Hi");
    let audioPlayer = <HTMLVideoElement> document.getElementById("snare");
    audioPlayer.play();
  }

}
