"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Secondary = exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _buttons = require("../../components/buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Example/Button',
  component: _buttons.Button,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_buttons.Button, args, args.text);
};

var MenuBtnTemplate = function MenuBtnTemplate(args) {
  return /*#__PURE__*/_react["default"].createElement(_buttons.MenuButton, args, args.text);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  primary: true,
  text: "Hello World",
  fill: false,
  height: 3,
  disabled: false,
  dark: false,
  label: 'Button'
};
var Secondary = MenuBtnTemplate.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  text: "Hello World",
  height: 3,
  fill: false,
  label: 'Button'
}; // export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };