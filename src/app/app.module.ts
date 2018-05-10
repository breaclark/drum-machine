import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { ListBeatIntervalsComponent } from './list-beat-intervals/list-beat-intervals.component';
import { EditSoundComponent } from './edit-sound/edit-sound.component';
import { ManipulateBeatComponent } from './manipulate-beat/manipulate-beat.component';


@NgModule({
  declarations: [
    AppComponent,
    ListBeatIntervalsComponent,
    EditSoundComponent,
    ManipulateBeatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
