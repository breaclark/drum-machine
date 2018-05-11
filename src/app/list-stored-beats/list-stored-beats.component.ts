import { Component, Output, OnInit , EventEmitter} from '@angular/core';
import { BeatService } from '../beat.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Sound } from './../models/sounds.model';


@Component({
  selector: 'app-list-stored-beats',
  templateUrl: './list-stored-beats.component.html',
  styleUrls: ['./list-stored-beats.component.css'],
  providers: [BeatService]
})

export class ListStoredBeatsComponent implements OnInit {
  beats: FirebaseListObservable<any[]>;
  @Output() loadSender = new EventEmitter();
  constructor(private beatService: BeatService) { }

  ngOnInit() {
    this.beats = this.beatService.getBeats();
  }

  loadBeatIntoEditor(savedBeat: Sound[][]) {
    this.loadSender.emit(savedBeat);
  }


}
