"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var name = "";
var email = "";
var message = "";
var submitForm = document.querySelector('.send-msg-form');
var topTilte = document.querySelector('.top-title');
var formName = document.querySelector('.f-name');
var formEmail = document.querySelector('.f-email');
var formMessage = document.querySelector('.f-message');

var testFunc = function testFunc(e) {
  return console.log('clicked!!');
};

topTilte.addEventListener('click', function (e) {
  return console.log("works");
});
submitForm.addEventListener('click', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            console.log(formName.value, formEmail.value, formMessage.value);
            console.log('submit stuff');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
console.log("so far so good");