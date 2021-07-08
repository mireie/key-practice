import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Keys from './js/keys.js';
import { Session } from './js/session';


function displayKeyMode(key, mode, scale) {
  $("#keyDisplay").html(key);
  $("#modeDisplay").html(mode);
  $("#scaleDisplay").html("");
  scale.forEach(function(element){
    $("#scaleDisplay").append(element + "&nbsp;" + "&nbsp;" );
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

function nextPair(keyConst, session) {
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

let interval;
function countdown(entry1, entry2) {
  clearInterval(interval);
  interval = setInterval(function() {
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

      if (minutes == 0 && seconds == 0) {clearInterval(interval);
        nextPair(entry1, entry2);
        resetTime();
        setInterval(countdown(entry1,entry2),1000);// eslint-disable-line
    }
  }, 1000);
}

function resetTime() {
  $('.js-timeout').text("2:00");

}

$(document).ready(() => {
  $('#start-timer').click(function () {
    resetTime();
    clearInterval(interval);
  }); //same click function to 113

  $('#play').click(function () {
    countdown(keyConst, session);
    // resetTime();
    // setInterval(resetTime, 11500);
    // setInterval(countdown(keyConst, session), 120000);
  });
  
  $('#pause').click(function () {
    clearInterval(interval);
  });
  
  $('#next').click(function () {
    nextPair(keyConst, session);
    clearInterval(interval);
    resetTime();
  });

  $('#stop').click(function () {
    resetTime();
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

  let keyConst = new Keys();
  let session = new Session();
  let usableObject;

  $('.submit-btn').click(function () {
    usableObject = session.getInputs(keyConst);
    runKeySet(keyConst, usableObject);
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



