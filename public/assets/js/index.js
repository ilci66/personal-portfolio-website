"use strict";

var name = "";
var email = "";
var message = "";
var submitForm = document.querySelector('.send-msg-form');
var topTilte = document.querySelector('.top-title');
topTilte.addEventListener('click', function () {
  return console.log("works");
});
submitForm.addEventListener('click', function (e) {
  prevent.default(e);
  console.log('submit stuff');
});
console.log("so far so good");