import { Component, OnInit } from '@angular/core';
import { BeatService } from '../beat.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-list-stored-beats',
  templateUrl: './list-stored-beats.component.html',
  styleUrls: ['./list-stored-beats.component.css'],
  providers: [BeatService]
})
export class ListStoredBeatsComponent implements OnInit {
  beats: FirebaseListObservable<any[]>;
  constructor(private beatService: BeatService) { }

  ngOnInit() {
    this.beats = this.beatService.getBeats();
  }

}
