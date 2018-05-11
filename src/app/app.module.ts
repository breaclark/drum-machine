import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ListBeatIntervalsComponent } from './list-beat-intervals/list-beat-intervals.component';
import { EditSoundComponent } from './edit-sound/edit-sound.component';
import { ManipulateBeatComponent } from './manipulate-beat/manipulate-beat.component';
import { ListStoredBeatsComponent } from './list-stored-beats/list-stored-beats.component';
import { SaveBeatComponent } from './save-beat/save-beat.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    ListBeatIntervalsComponent,
    EditSoundComponent,
    ManipulateBeatComponent,
    ListStoredBeatsComponent,
    SaveBeatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
