import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sound } from './../models/sounds.model';

@Component({
  selector: 'app-load-saved-beat',
  templateUrl: './load-saved-beat.component.html',
  styleUrls: ['./load-saved-beat.component.css']
})
export class LoadSavedBeatComponent {
  @Input() childSavedBeat: Sound[][];
  @Output() loadSender = new EventEmitter();
  constructor() { }

  loadBeat() {
    this.loadSender.emit(this.childSavedBeat);
  }
}
