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
})(["box-sizing:border-box;appearance:none;outline:none;border:none;border-radius:.25rem;margin:.8rem 0;cursor:pointer;letter-spacing:1.2px;:focus{border-width:2px;}:hover{filter:brightness(0.96);}"]);

var MenuButton = (0, _styledComponents["default"])(BaseButton).withConfig({
  componentId: "sc-42o6hl-1"
})(["width:", ";height:3rem;padding:.8rem;color:#000;font-weight:600;letter-spacing:0.7px;font-size:.8rem;border:1px solid #b2b2b2;background-color:#fff;"], function (_ref) {
  var fill = _ref.fill;
  return fill ? "100%" : "9rem";
});
exports.MenuButton = MenuButton;
var Button = (0, _styledComponents["default"])(BaseButton).withConfig({
  componentId: "sc-42o6hl-2"
})(["width:", ";height:3rem;font-size:.9rem;opacity:", ";background-color:", ";color:", ";font-weight:400;"], function (_ref2) {
  var fill = _ref2.fill;
  return fill ? "100%" : "12rem";
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? 0.5 : 1;
}, function (_ref4) {
  var primary = _ref4.primary;
  return primary ? _index.primary : _index.secondary;
}, function (_ref5) {
  var dark = _ref5.dark;
  return dark ? "#1c1b1c" : "#fff";
});
exports.Button = Button;