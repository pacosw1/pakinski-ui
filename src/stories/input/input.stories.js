import React from 'react';
import { TextInput } from '../../components/inputs';


export default {
  title: 'Example/Inputs',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TextInput {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  text: "This is Breaking News",
  width: '20',
  error: false,
  password: false,
  fill: false,
  placeholder: "Email"
};
