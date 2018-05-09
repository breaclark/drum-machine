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
      this.childBeats[beatIndex][soundIndex].switchImg = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/switch-off.png";
    } else {
      this.childBeats[beatIndex][soundIndex].switch = true;
      this.childBeats[beatIndex][soundIndex].switchImg = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/switch-on.png";
    }
    this.beatsSender.emit(this.childBeats);
  }

}
