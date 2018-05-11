export class Sound {
  public switch : boolean = false;
  public switchImg : string = "https://raw.githubusercontent.com/breatortilla/drum-machine/master/src/assets/switch-off.png";
  constructor(public name: string, public soundFile: string) {

  }

  changeSound(newSoundFile: string) {
    this.soundFile = newSoundFile;
  }
}
