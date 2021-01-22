"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BaseInput = _styledComponents["default"].input.withConfig({
  componentId: "sc-155m0bc-0"
})(["box-sizing:border-box;appearance:none;border:none;"]);

var TextInput = (0, _styledComponents["default"])(BaseInput).withConfig({
  componentId: "sc-155m0bc-1"
})(["padding:1rem .5rem;border:", ";margin:.2rem 0;height:", "rem;placeholder:", ";font-family:\"Roboto\",sans-serif;outline-color:#b3b3b3;font-weight:300;border-radius:0.2rem;width:", ";color:rgb(0,0,0);font-size:1rem;padding-left:0.8rem;"], function (_ref) {
  var error = _ref.error;
  return "1px solid ".concat(error ? '#f70049' : '#ddd');
}, function (_ref2) {
  var height = _ref2.height;
  return height ? height : 3;
}, function (_ref3) {
  var label = _ref3.label;
  return label;
}, function (_ref4) {
  var fill = _ref4.fill,
      width = _ref4.width;
  return fill ? "100%" : width + "rem";
});
exports.TextInput = TextInput;