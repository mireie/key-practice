export default class Keys {
  constructor() {
    this.ChromaticScaleSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
    this.ChromaticScaleFlat = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C"];
    this.ionian = "";
  }

  ionianChange(i) {
    return [i+0, i+2, i+4, i+5, i+7, i+9, i+11, i+12] //difference from root
  }

  ionianKey(key) {
  return this.ChromaticScaleSharp.indexOf(key);
    // const result = this.ionianChange(tempKey);
    // this.ionian = result;
  }

}