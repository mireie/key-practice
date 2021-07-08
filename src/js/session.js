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
    this.counter = 0;
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
  }

  getPair() {
    const availablePairs = this.pairs.filter(pair => pair.status === "incomplete");
    const availableTotal = this.pairs.length;
    let userNumber = parseInt($("#numberOfScales").val());
    if (userNumber > availableTotal) {
      $("#scale-total").text(availableTotal);
    } else {
      $("#scale-total").text(userNumber);
    }
    if (availablePairs.length < 1 || this.counter === userNumber) {
      this.sessionComplete();
    } else {
      const seed = Math.floor(Math.random() * availablePairs.length);
      let pairID = availablePairs[seed].id;
      this.pairs[pairID].status = "In Progress";
      this.counter++;
      $("#counter").text(this.counter);
      return availablePairs[seed];
    }
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
      $("#error1").text("Please select at least one key and mode.");
      if ($("#error1").is(":hidden")) {
        $("#error1").slideToggle();
      }
    } else {
      if ($("#error1").is(":visible")) {
        $("#error1").slideToggle();
      }
      hideThings([".result-stats"]);
      fadeInThings([".active-stats"]);
      slideInThings([".skip"]);
      this.makePairs(keyArray, modeArray);
      return this.getPair();
    }
  }

  sessionComplete() {
    let numberPracticed = 0;
    $("#scale-total-results").text(numberPracticed);
    $(".result-stats").fadeToggle();
    $(".active-stats").toggle();
    $(".skip").slideToggle("slow");
    $("#scale-list").html("");
    this.pairs.forEach(function (element) {
      if (element.status === "In Progress") {
        $("#scale-list").append(`<div class="col-4">${element.key}-${element.mode}</div>`);
        numberPracticed++;
      }
      $("#scale-total-results").text(numberPracticed);
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
