import { Component, OnInit } from '@angular/core';
import { BeatService } from '../beat.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-save-beat',
  templateUrl: './save-beat.component.html',
  styleUrls: ['./save-beat.component.css'],
  providers: [BeatService]
})
export class SaveBeatComponent implements OnInit {

  constructor(private beatService: BeatService) { }

  ngOnInit() {
  }

  saveBeat() {
    console.log("hi");
  }

}
