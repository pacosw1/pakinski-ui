"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextPreview = exports.SubtitlePreview = exports.Secondary = exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _typography = require("../../components/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Example/Typography',
  component: _typography.Header,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_typography.Header, args, args.text);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  text: "This is Breaking News"
};

var SubTemplate = function SubTemplate(args) {
  return /*#__PURE__*/_react["default"].createElement(_typography.SubHeader, args, args.text);
};

var Secondary = SubTemplate.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  text: "This is Breaking News"
};

var Subt = function Subt(args) {
  return /*#__PURE__*/_react["default"].createElement(_typography.Subtitle, args, args.text);
};

var SubtitlePreview = Subt.bind({});
exports.SubtitlePreview = SubtitlePreview;
SubtitlePreview.args = {
  text: "This is Breaking News"
};

var TextT = function TextT(args) {
  return /*#__PURE__*/_react["default"].createElement(_typography.Text, args, args.text);
};

var TextPreview = TextT.bind({});
exports.TextPreview = TextPreview;
TextPreview.args = {
  text: "This is Breaking News"
};