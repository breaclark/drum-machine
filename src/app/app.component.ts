import { Component } from '@angular/core';
import { Sound } from './models/sounds.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Drum Machine Clone';
  kit = ["https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/kick.mp3", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/snare.mp3", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/high-hat-open.mp3", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/high-hat-closed.mp3"];
  beats : Sound[] [] = [
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])],
  [new Sound("kick", this.kit[0]),
  new Sound("snare", this.kit[1]),
  new Sound("high-hat-open", this.kit[2]),
  new Sound("high-hat-closed", this.kit[3])]];

  editBeats (childBeats: Sound[][]){
    this.beats = childBeats;
  }

  clearBeats(childBeats: Sound[][]){
    this.beats = childBeats;
  }

  loadBeatIntoEditor(savedBeat: Sound[][]) {
    this.beats = savedBeat;
  }

  changeKit(newKit: string[]) {
    this.kit = newKit;
  }
}
