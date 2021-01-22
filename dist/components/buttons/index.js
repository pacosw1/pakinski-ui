"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.MenuButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../colors/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BaseButton = _styledComponents["default"].button.withConfig({
  componentId: "sc-42o6hl-0"
})(["box-sizing:border-box;appearance:none;outline:none;border:none;border-radius:.25rem;margin:", ";cursor:pointer;letter-spacing:1.2px;:focus{border-width:1.2px;}height:", ";:hover{filter:brightness(0.98);}"], function (_ref) {
  var vMargin = _ref.vMargin,
      hMargin = _ref.hMargin;
  return vMargin + "rem " + hMargin + "rem";
}, function (_ref2) {
  var height = _ref2.height;
  return height ? height + 'rem' : "3rem";
});

var MenuButton = (0, _styledComponents["default"])(BaseButton).withConfig({
  componentId: "sc-42o6hl-1"
})(["width:", ";padding:.8rem;color:#000;font-weight:600;letter-spacing:0.7px;font-size:.8rem;border:1px solid #b2b2b2;background-color:#fff;"], function (_ref3) {
  var fill = _ref3.fill;
  return fill ? "100%" : "9rem";
});
exports.MenuButton = MenuButton;
var Button = (0, _styledComponents["default"])(BaseButton).withConfig({
  componentId: "sc-42o6hl-2"
})(["width:", ";font-size:.9rem;opacity:", ";background-color:", ";color:", ";font-weight:400;"], function (_ref4) {
  var fill = _ref4.fill;
  return fill ? "100%" : "12rem";
}, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled ? 0.5 : 1;
}, function (_ref6) {
  var primary = _ref6.primary;
  return primary ? _index.primary : _index.secondary;
}, function (_ref7) {
  var dark = _ref7.dark;
  return dark ? "#1c1b1c" : "#fff";
});
exports.Button = Button;