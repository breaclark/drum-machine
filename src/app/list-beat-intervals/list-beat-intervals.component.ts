import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sound } from './../models/sounds.model';

@Component({
  selector: 'app-list-beat-intervals',
  templateUrl: './list-beat-intervals.component.html',
  styleUrls: ['./list-beat-intervals.component.css']
})
export class ListBeatIntervalsComponent {
  @Input() childBeats: Sound[][];
}
