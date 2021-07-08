import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Keys from './js/keys.js';
import { Session } from './js/session';
import { countdown, resetTime, interval } from './js/timer.js';

function displayKeyMode(key, mode, scale) {
  $("#keyDisplay").html(key);
  $("#modeDisplay").html(mode);
  $("#scaleDisplay").html("");
  scale.forEach(function (element) {
    $("#scaleDisplay").append(element + "&nbsp;" + "&nbsp;");
  });
}

function checkUncheck(name) {
  let items = document.getElementsByName(name);
  let ticker = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked == true) {
      ticker++;
    }
  }
  if (ticker === items.length) {
    for (let j = 0; j < items.length; j++) {
      if (items[j].type == 'checkbox') {
        items[j].checked = false;
      }
    }
  } else {
    for (let j = 0; j < items.length; j++) {
      if (items[j].type == 'checkbox') {
        items[j].checked = true;
      }
    }
  }
}

export function nextPair(keyConst, session) {
  let usableObject = session.getPair();
  if (typeof usableObject !== "undefined") {
    runKeySet(keyConst, usableObject);
  }
}

function runKeySet(keyConst, usableObject) {
  keyConst.indexKey(usableObject.key);
  keyConst.getModes();
  keyConst.printMode(usableObject.mode);
  let scale = keyConst.activeMode;
  displayKeyMode(usableObject.key, usableObject.mode, scale);
}

function showPlay() {
  if ($('#play').is(":hidden")) {
    $('#play').show();
    $('#pause').hide();
  }
}

function resetStop() {
  resetTime();
  clearInterval(interval);
  showPlay();
}


$(document).ready(() => {
  $('#play').click(function () {
    countdown(keyConst, session);
    $('#play').hide();
    $('#pause').show();
  });

  $('#pause').click(function () {
    clearInterval(interval);
    showPlay();
  });

  $('#next').click(function () {
    nextPair(keyConst, session);
    resetStop();
  });

  $('#stop').click(function () {
    resetStop();
  });

  $('.input-hide').click(function () {
    if ($('form').is(':hidden')) {
      ($('#input-text')).text("Hide");
    } else {
      ($('#input-text')).text("Show");
    }
    $('form').slideToggle();
  });

  let keyConst = new Keys();
  let session = new Session();
  let usableObject;

  $('.submit-btn').click(function () {
    usableObject = session.getInputs(keyConst);
    runKeySet(keyConst, usableObject);
    resetStop();
  });
  $('.skip').click(() => {
    nextPair(keyConst, session);
    resetStop();
  });
  $('.checkKeys').click(function () {
    event.preventDefault();
    checkUncheck("key");
  });
  $('.checkModes').click(function () {
    event.preventDefault();
    checkUncheck("mode");
  });
});




