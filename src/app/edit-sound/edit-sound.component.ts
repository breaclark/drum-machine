import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sound } from './../models/sounds.model';

@Component({
  selector: 'app-edit-sound',
  templateUrl: './edit-sound.component.html',
  styleUrls: ['./edit-sound.component.css']
})
export class EditSoundComponent {
  @Input() childSingleBeat: Sound[];
  @Input() childSingleBeatIndex: number;
  @Output() toggleSender = new EventEmitter();

  toggle(soundIndex: number) {
    let indices: number[] = [this.childSingleBeatIndex, soundIndex]
    this.toggleSender.emit(indices);
    let audioPlayer = <HTMLVideoElement> document.getElementById("sound" + "-" + this.childSingleBeatIndex + "-" + soundIndex);
    audioPlayer.play();
  }
}
