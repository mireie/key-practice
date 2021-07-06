export default class Keys {
  constructor() {
    this.ChromaticScaleSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
    this.ChromaticScaleFlat = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C"];
    this.ionian = [];
    this.dorian = [];
    this.phrygian = [];
    this.lydian = [];
    this.mixolydian = [];
    this.aeolian = [];
    this.locrian = [];

    this.key = "";
  }

  indexKey(key) {
    this.key = this.ChromaticScaleSharp.indexOf(key);
  }

  getModes() {
    const i = this.key;
    this.ionian =     [i + 0, i + 2, i + 4, i + 5, i + 7, i + 9, i + 11, i + 12];
    this.dorian =     [i + 0, i + 2, i + 3, i + 5, i + 7, i + 9, i + 10, i + 12];
    this.lydian =     [i + 0, i + 2, i + 4, i + 6, i + 7, i + 9, i + 11, i + 12];
    this.phrygian =   [i + 0, i + 1, i + 3, i + 5, i + 7, i + 8, i + 10, i + 12];
    this.mixolydian = [i + 0, i + 2, i + 4, i + 5, i + 7, i + 9, i + 10, i + 12];
    this.aeolian =    [i + 0, i + 2, i + 3, i + 5, i + 7, i + 8, i + 10, i + 12];
    this.locrian =    [i + 0, i + 1, i + 3, i + 5, i + 6, i + 8, i + 10, i + 12];
  }
  
  // sharpLoop() {
  //   this.ionian = this.ionian.map(function(element) {
  //     return this.ChromaticScaleSharp[element]
  //   })
  //   this.dorian = this.dorian.map(function(element) {
  //     return this.ChromaticScaleSharp[element]
  //   })
  //   this.phrygian = this.phrygian.map(function(element) {
  //     return this.ChromaticScaleSharp[element]
  //   })
  //   this.lydian = this.lydian.map(function(element) {
  //     return this.ChromaticScaleSharp[element]
  //   })
  //   this.mixolydian = this.mixolydian.map(function(element) {
  //     return this.ChromaticScaleSharp[element]
  //   })
  //   this.aeolian = this.aeolian.map(function(element) {
  //     return this.ChromaticScaleSharp[element]
  //   })
  //   this.locrian = this.locrian.map(function(element) {
  //     return this.ChromaticScaleSharp[element]
  //   })
  // }

}
