export default class KMPair {
  constructor(key, mode) {
    this.key = key;
    this.mode = mode;
    this.status = "incomplete";
  }

}

export class Session {
  constructor(pairs) {
    this.pairs = [];
  }
  
  makePairs(keyArray, modeArray) {
    let pairArray = [];
    keyArray.forEach(function (key) {
      modeArray.forEach(function (mode) {
        pairArray.push(new KMPair(key, mode));
      });
    });
    this.pairs = pairArray;
  }
}