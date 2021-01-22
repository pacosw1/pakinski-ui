"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _inputs = require("../../components/inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Example/Inputs',
  component: _inputs.TextInput,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_inputs.TextInput, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  text: "This is Breaking News",
  width: '20',
  error: false,
  password: false,
  fill: false,
  placeholder: "Email"
};