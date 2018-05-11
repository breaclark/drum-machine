import { Component } from '@angular/core';
import { Sound } from './models/sounds.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Drum Machine Clone';
  kickLink = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/kick.mp3";
  snareLink = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/snare.mp3";
  hhoLink = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/high-hat-open.mp3";
  hhcLink = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/high-hat-closed.mp3";
  beats : Sound[] [] = [
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

  editBeats (childBeats: Sound[][]){
    this.beats = childBeats;
  }

  clearBeats(childBeats: Sound[][]){
    this.beats = childBeats;
  }

  loadBeatIntoEditor(savedBeat: Sound[][]) {
    this.beats = savedBeat;
  }
}
