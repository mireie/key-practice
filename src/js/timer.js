import $ from 'jquery';
import { nextPair } from './../main.js';

export let interval;
export function countdown(entry1, entry2) {
  interval = setInterval(function () {
    let timer = $('.js-timeout').html();
    timer = timer.split(':');
    let minutes = timer[0];
    let seconds = timer[1];
    seconds -= 1;
    if (minutes < 0) return;
    else if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    }
    else if (seconds < 10 && length.seconds != 2) {
      seconds = '0' + seconds;
      $('.js-timeout').html(minutes + ':' + seconds);
    }
    if (minutes == 0 && seconds == 0 && $(".result-stats").is(":hidden")) {
      clearInterval(interval);
      nextPair(entry1, entry2);
      resetTime();
      setInterval(countdown(entry1, entry2), 1000);
    }
  }, 1000);
}

export function resetTime() {
  if ($('input#seconds').val() == 0 && $('input#minutes').val() == 0) {
    $("#error2").text("Please input a number in minutes or seconds besides 0, otherwise it will default to 5:00.");
    $('.js-timeout').text('5:00');
    if ($("#error2").is(":hidden")) {
      $("#error2").slideToggle();
    }
  }
  else if ($('input#seconds').val() < 10) {
    $('.js-timeout').text($('input#minutes').val() + ":0" + $('input#seconds').val());
    if ($("#error2").is(":visible")) {
      $("#error2").slideToggle();
    }
  } else {
    $('.js-timeout').text($('input#minutes').val() + ":" + $('input#seconds').val());
    if ($("#error2").is(":visible")) {
      $("#error2").slideToggle();
    }
  }
}
