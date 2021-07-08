export default class Keys {
  constructor() {
    this.ChromaticScaleSharp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C"];
    this.ChromaticScaleFlat = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C"];
    this.Ionian = [];
    this.Dorian = [];
    this.Phrygian = [];
    this.Lydian = [];
    this.Mixolydian = [];
    this.Aeolian = [];
    this.Locrian = [];
  }

  indexKey(key) {
    if(key.length === 2 && key.includes("♯") || key.length === 1) {
      this.key = this.ChromaticScaleSharp.indexOf(key);
    } else {
      this.key = this.ChromaticScaleFlat.indexOf(key);
    }
  } 

  getModes() {
    const i = this.key;
    this.Ionian = [i + 0, i + 2, i + 4, i + 5, i + 7, i + 9, i + 11, i + 12];
    this.Dorian = [i + 0, i + 2, i + 3, i + 5, i + 7, i + 9, i + 10, i + 12];
    this.Lydian = [i + 0, i + 2, i + 4, i + 6, i + 7, i + 9, i + 11, i + 12];
    this.Phrygian = [i + 0, i + 1, i + 3, i + 5, i + 7, i + 8, i + 10, i + 12];
    this.Mixolydian = [i + 0, i + 2, i + 4, i + 5, i + 7, i + 9, i + 10, i + 12];
    this.Aeolian = [i + 0, i + 2, i + 3, i + 5, i + 7, i + 8, i + 10, i + 12];
    this.Locrian = [i + 0, i + 1, i + 3, i + 5, i + 6, i + 8, i + 10, i + 12];
  }

  printMode(mode) {
    const key = this.key;
    this.activeMode = this[mode].map(function (element) {
      if (key === 0 || key === 2 || key === 4 || key === 7 || key === 9 || key === 11 || key === 6) {
        let sharp = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C"];
        return sharp[element];
      } else {
        let flat = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C"];
        return flat[element];
      }
    });
  }
}