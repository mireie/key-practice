export default class Keys {
  constructor() {
    this.key = "";
    this.ChromaticScaleSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
    this.ChromaticScaleFlat = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C"];
    this.ionian = [];
    this.dorian = [];
    this.phrygian = [];
    this.lydian = [];
    this.mixolydian = [];
    this.aeolian = [];
    this.locrian = [];
  }

  indexKey(key) {
    this.key = this.ChromaticScaleSharp.indexOf(key);
  }

  getModes() {
    const i = this.key;
    this.ionian = [i + 0, i + 2, i + 4, i + 5, i + 7, i + 9, i + 11, i + 12];
    this.dorian = [i + 0, i + 2, i + 3, i + 5, i + 7, i + 9, i + 10, i + 12];
    this.lydian = [i + 0, i + 2, i + 4, i + 6, i + 7, i + 9, i + 11, i + 12];
    this.phrygian = [i + 0, i + 1, i + 3, i + 5, i + 7, i + 8, i + 10, i + 12];
    this.mixolydian = [i + 0, i + 2, i + 4, i + 5, i + 7, i + 9, i + 10, i + 12];
    this.aeolian = [i + 0, i + 2, i + 3, i + 5, i + 7, i + 8, i + 10, i + 12];
    this.locrian = [i + 0, i + 1, i + 3, i + 5, i + 6, i + 8, i + 10, i + 12];
  }

  sharpLoop(mode) {
    this.activeMode = this.[mode].map(function (element) {
      let sharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
      return sharp[element];
    });
  }
}


 // this.dorianSharp = this.dorian.map(function(element) {
    //   return this.ChromaticScaleSharp[element];
    // })
    // this.phrygianSharp = this.phrygian.map(function(element) {
    //   return this.ChromaticScaleSharp[element];
    // })
    // this.lydianSharp = this.lydian.map(function(element) {
    //   return this.ChromaticScaleSharp[element];
    // })
    // this.mixolydianSharp = this.mixolydian.map(function(element) {
    //   return this.ChromaticScaleSharp[element];
    // })
    // this.aeolianSharp = this.aeolian.map(function(element) {
    //   return this.ChromaticScaleSharp[element];
    // })
    // this.locrianSharp = this.locrian.map(function(element) {
    //   return this.ChromaticScaleSharp[element];
    // })