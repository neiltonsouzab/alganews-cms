import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SessionController from '../components/SessionController';
export default {
  title: 'Example/SessionController',
  component: SessionController,
} as ComponentMeta<typeof SessionController>;

const Template: ComponentStory<typeof SessionController> = (args) => <SessionController {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Neilton Barbosa",
  description: "editor há 2 anos",
  onLogout: () => console.log('logout!'),
};