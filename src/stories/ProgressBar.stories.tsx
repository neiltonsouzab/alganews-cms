import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar from '../app/components/ProgressBar';
export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  progress: 50,
  theme: 'primary',
  title: 'javascript',
  width: 300
};

export const Secondary = Template.bind({});
Secondary.args = {
  progress: 50,
  theme: 'secondary',
  title: 'javascript',
  width: 300
};