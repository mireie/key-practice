import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Keys from './js/keys.js';
import { Session } from './js/session';
// import Session from './js/session.js';

function displayKeyMode(key, mode, scale) {
  $("#keyDisplay").html(key);
  $("#modeDisplay").html(mode);
  $("#scaleDisplay").html(scale);
}


$(document).ready(() => {
  // $('.input-hide').click(function () {
  //   if ($('form').is(':hidden')) {
  //     ($('#input-text')).text("Hide");
  //   } else {
  //     ($('#input-text')).text("Show");
  //   }
  //   $('form').slideToggle();
  // });
  // $('#advanced').click(function () {
  //   $('.advanced').slideToggle();
  // });
  // $('.checkKeys').click(function () {

  // });

  $('#form').submit(function () {
    event.preventDefault();
    const keyArray = [];
    const modeArray = [];
    $("input:checkbox[name=key]:checked").each(function() {
      keyArray.push($(this).val());
    });
    $("input:checkbox[name=mode]:checked").each(function() {
      modeArray.push($(this).val());
    });
    let keyConst = new Keys();
    let session = new Session();
    session.makePairs(keyArray,modeArray);
    console.log(session);
    // keyConst.indexKey(key);
    keyConst.getModes();
    console.log(keyConst);
    // keyConst.printMode(mode);
    let scale = keyConst.activeMode;
    console.log(scale);
    // displayKeyMode(key, mode, scale);
  });

  
  // $('#div-id').timer({
  //   duration: '3s',
  //   callback: function() {
  //     console.log("dude, hello?");
  //   },
  //   repeat: true
  // });


});


// function checkedToppings() {
//   let selectedToppings = [];
//   $(".form-check-input:checkbox:checked").each(function () {
//     selectedToppings.push(toppings.toppingList[$(this).prop("value")]);
//   });
//   return selectedToppings;
// }