import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Keys from './js/keys.js';
import { Session } from './js/session';

function displayKeyMode(key, mode, scale) {
  $("#keyDisplay").html(key);
  $("#modeDisplay").html(mode);
  $("#scaleDisplay").html(scale);
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

function nextPair(keyConst, session) {
  let usableObject = session.getPair();
  runKeySet(keyConst, usableObject);
}

function runKeySet(keyConst, usableObject) {
  keyConst.indexKey(usableObject.key);
  keyConst.getModes();
  keyConst.printMode(usableObject.mode);
  let scale = keyConst.activeMode;
  displayKeyMode(usableObject.key, usableObject.mode, scale);
}

var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      $('.js-timeout').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

$(document).ready(() => {
  $('#start-timer').click(function () {
    $('.js-timeout').text("2:00");
    countdown();
  });

  $('#play').click(function () {
    $('.js-timeout').show();
    countdown();
  });
  
  $('#pause').click(function () {
    clearInterval(interval);
  });
  
  $('#next').click(function () {
    nextPair(keyConst, session);
    clearInterval(interval);
    $('.js-timeout').text("2:00");
  });

  $('#stop').click(function () {
    $('.js-timeout').text("2:00");
    clearInterval(interval);
  });

  $('.input-hide').click(function () {
    if ($('form').is(':hidden')) {
      ($('#input-text')).text("Hide");
    } else {
      ($('#input-text')).text("Show");
    }
    $('form').slideToggle();
  });
  $('#advanced').click(function () {
    $('.advanced').slideToggle();
  });
  
  let keyConst = new Keys();
  let session = new Session();
  let usableObject;
  
  $('.submit-btn').click(function () {
    session.getInputs();
    usableObject = session.getPair();
    runKeySet(keyConst, usableObject);
    $('.submit-btn').text('Get New Pairs');

  });
  $('.skip').click(() => {
    nextPair(keyConst, session);
    $('.js-timeout').text("2:00");
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


