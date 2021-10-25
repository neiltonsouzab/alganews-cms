import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Profile from '../components/Profile';
export default {
  title: 'Example/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Neilton Barbosa',
  description: 'criador de conteúdo há 3 anos'
};