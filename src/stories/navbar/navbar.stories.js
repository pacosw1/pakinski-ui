import React from 'react';
import { Navbar, NavContainer } from '../../components/navbar';
import { Header, SubHeader, Subtitle, Text } from '../../components/typography';


export default {
  title: 'Example/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Navbar {...args}><NavContainer left={true} spacing={0}><SubHeader>Hello</SubHeader></NavContainer><NavContainer spacing={2} left={false}><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text></NavContainer></Navbar>;

export const NavbarPreview = Template.bind({});
NavbarPreview.args = {
  hidden: false,
};


const NavContainerTemplate = (args) => <NavContainer><Text>Hello</Text></NavContainer>;

export const NavContainerPreview = NavContainerTemplate.bind({});
NavContainerPreview.args = {

};
