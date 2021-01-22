"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Subtitle = exports.SubHeader = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BaseH1 = _styledComponents["default"].h1.withConfig({
  componentId: "oot07a-0"
})(["box-sizing:border-box;font-family:Roboto,sans-serif;margin:0;padding:0;"]);

var Header = (0, _styledComponents["default"])(BaseH1).withConfig({
  componentId: "oot07a-1"
})(["font-size:2rem;letter-spacing:0.9px;font-weight:800;color:#000;padding:0.5rem 0;"]);
exports.Header = Header;
var SubHeader = (0, _styledComponents["default"])(BaseH1).withConfig({
  componentId: "oot07a-2"
})(["font-size:1.7rem;letter-spacing:1.1px;color:#000;padding:0.5rem 0;"]);
exports.SubHeader = SubHeader;
var Subtitle = (0, _styledComponents["default"])(BaseH1).withConfig({
  componentId: "oot07a-3"
})(["font-size:1.1rem;letter-spacing:1.1px;font-weight:500;color:#515151;padding-bottom:.5rem;"]);
exports.Subtitle = Subtitle;
var Text = (0, _styledComponents["default"])(BaseH1).withConfig({
  componentId: "oot07a-4"
})(["font-size:.92rem;letter-spacing:1px;font-weight:500;color:#121212;"]);
exports.Text = Text;