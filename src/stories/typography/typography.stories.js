import React from 'react';
import { Header, SubHeader, Subtitle, Text } from '../../components/typography';


export default {
  title: 'Example/Typography',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Header {...args}>{args.text}</Header>;

export const Primary = Template.bind({});
Primary.args = {
  text: "This is Breaking News"
};

const SubTemplate = (args) => <SubHeader {...args}>{args.text}</SubHeader>;

export const Secondary = SubTemplate.bind({});
Secondary.args = {
  text: "This is Breaking News"
};

const Subt = (args) => <Subtitle {...args}>{args.text}</Subtitle>;

export const SubtitlePreview = Subt.bind({});
SubtitlePreview.args = {
  text: "This is Breaking News"
};

const TextT = (args) => <Text {...args}>{args.text}</Text>;

export const TextPreview = TextT.bind({});
TextPreview.args = {
  text: "This is Breaking News"
};



