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
    this.counter =0;
  }

  makePairs(keyArray, modeArray) {
    this.counter = 0;
    let pairArray = [];
    keyArray.forEach(function (key) {
      modeArray.forEach(function (mode) {
        pairArray.push(new KMPair(key, mode));
      });
    });
    pairArray.forEach((element, index) => {
      element.id = index;
    });
    this.pairs = pairArray;
    $("#scale-total").text(this.pairs.length);
  }

  getPair() {
    const availablePairs = this.pairs.filter(pair => pair.status === "incomplete");
    if (availablePairs.length < 1) {
      this.sessionComplete();
    } else {
      const seed = Math.floor(Math.random() * availablePairs.length);
      let pairID = availablePairs[seed].id;
      this.pairs[pairID].status = "In Progress";
      console.log(availablePairs);
      this.counter++;
      $("#counter").text(this.counter);
      return availablePairs[seed];
    }
  }

  getInputs(keyConst) {
    const keyArray = [];
    const modeArray = [];

    $("input:checkbox[name=key]:checked").each(function () {
      keyArray.push($(this).val());
    });
    $("input:checkbox[name=mode]:checked").each(function () {
      modeArray.push($(this).val());
    });

    if (keyArray.length === 0 || modeArray.length === 0) {
      $("#error").text("Please select at least one key and mode.");
      if ($("#error").is(":hidden")) {
        $("#error").slideToggle();
      }
    } else {
      if ($("#error").is(":visible")) {
        $("#error").slideToggle();
      }
      hideThings([".result-stats"]);
      fadeInThings([".active-stats"]);
      slideInThings([".skip"]);
      this.makePairs(keyArray, modeArray);
      return this.getPair();
    }
  }

  sessionComplete() {
    $("#scale-total-results").text(this.pairs.length);
    $(".result-stats").fadeToggle();
    $(".active-stats").toggle();
    $("#scale-list").html("");
    $(".skip").slideToggle("slow");
    this.pairs.forEach(function (element) {
      $("#scale-list").append(`<li>${element.key}-${element.mode}</li>`);
    });
  }
}

function hideThings(array) {
  array.forEach(function (element) {
    if ($(element).is(":visible")) {
      $(element).toggle();
    }
  });
}

function fadeInThings(array) {
  array.forEach(function (element) {
    if ($(element).is(":hidden")) {
      $(element).fadeToggle("slow");
    }
    $('.submit-btn').text('Get New Scales');
  });
}

function slideInThings(array) {
  array.forEach(function (element) {
    if ($(element).is(":hidden")) {
      $(element).slideToggle("slow");
    }
  });
}