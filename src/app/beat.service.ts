import { Injectable } from '@angular/core';
import { Beat } from './models/beat.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class BeatService {
  beats: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase){
    this.beats = database.list('beats');
  }

}
