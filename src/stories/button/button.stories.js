import React from 'react';
import { Button, MenuButton } from '../../components/buttons';


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args}>{args.text}</Button>;
const MenuBtnTemplate = args => <MenuButton {...args}>{args.text}</MenuButton>

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: "Hello World",
  fill: false,
  height: 3,
  disabled: false,
  dark: false,
  label: 'Button',
};



export const Secondary = MenuBtnTemplate.bind({});
Secondary.args = {
  text: "Hello World",
  height: 3,

  fill: false,
  label: 'Button',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };