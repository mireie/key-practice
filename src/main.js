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

$(document).ready(() => {
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


