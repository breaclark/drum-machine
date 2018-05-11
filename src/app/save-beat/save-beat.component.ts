import { Component, Input, OnInit } from '@angular/core';
import { BeatService } from '../beat.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Beat } from './../models/beat.model';
import { Sound } from './../models/sounds.model';

@Component({
  selector: 'app-save-beat',
  templateUrl: './save-beat.component.html',
  styleUrls: ['./save-beat.component.css'],
  providers: [BeatService]
})

export class SaveBeatComponent implements OnInit {
  @Input() childBeats: Sound[][];
  constructor(private beatService: BeatService) { }

  ngOnInit() {
  }

  saveBeat(name: string) {
    let newBeat = new Beat(name, this.childBeats);
    this.beatService.addBeat(newBeat);
  }

}
