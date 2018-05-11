import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-kit',
  templateUrl: './change-kit.component.html',
  styleUrls: ['./change-kit.component.css']
})
export class ChangeKitComponent  {
  @Output() kitSender = new EventEmitter();
  constructor() { }

  setLoFi() {
    let loFiKit = [];
    this.kitSender.emit(loFiKit);
  }

  set808() {
    let eight08Kit = [];
    this.kitSender.emit(eight08Kit);
  }

  setBeatBox() {
    let beatBoxKit = [];
    this.kitSender.emit(beatBoxKit);
  }


}
