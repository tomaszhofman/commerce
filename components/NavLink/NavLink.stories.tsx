import { NavLink } from './NavLink';
// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />;

export const Active = Template.bind({});

Active.args = {
  href: '/home',
  activeClassName: 'font-bold',
  children: <a>Home</a>,
};

export const InActive = Template.bind({});

InActive.args = {
  href: '',
  children: <a>Home</a>,
};
