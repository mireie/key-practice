import $ from 'jquery';

export default class KMPair {
  constructor(key, mode) {
    this.key = key;
    this.mode = mode;
    this.status = "incomplete";
  }
}

export class Session {
  constructor() {
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

  getPair() {
    const availablePairs = this.pairs.filter(pair => pair.status === "incomplete");
    const seed = Math.floor(Math.random() * availablePairs.length);
    this.pairs[seed].status = "in progress";
    return availablePairs[seed];
  }

  getInputs() {
    const keyArray = [];
    const modeArray = [];
    $("input:checkbox[name=key]:checked").each(function () {
      keyArray.push($(this).val());
    });
    $("input:checkbox[name=mode]:checked").each(function () {
      modeArray.push($(this).val());
    });
    if (keyArray.length === 0 || modeArray.length === 0) {
      if ($("#error").is(":hidden")) {
        $("#error").slideToggle();
      }
      $("#error").text("Please select at least one key and mode.");
    } else {
      if ($("#error").is(":visible")) {
        $("#error").slideToggle();
      }
      this.makePairs(keyArray, modeArray);
    }
  }
}