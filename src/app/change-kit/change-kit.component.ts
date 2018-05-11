import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-kit',
  templateUrl: './change-kit.component.html',
  styleUrls: ['./change-kit.component.css']
})
export class ChangeKitComponent  {
  @Output() kitSender = new EventEmitter();
  constructor() { }

  setLoFi() {
    let loFiKit = [
      "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/Cloudy-kick.wav", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/Cloudy-snare.wav", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/Cloudy-high-hat-open.wav", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/Cloudy-high-hat-closed.wav"
    ];
    this.kitSender.emit(loFiKit);
  }

  set808() {
    let eight08Kit = [
      "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/808-kick.wav", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/808-snare.wav", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/808-high-hat-open.wav", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/808-high-hat-closed.wav"
    ];
    this.kitSender.emit(eight08Kit);
  }

  setBeatBox() {
    let beatBoxKit = [
      "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/kick.mp3", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/snare.mp3", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/high-hat-open.mp3", "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/high-hat-closed.mp3"
    ];
    this.kitSender.emit(beatBoxKit);
  }


}
