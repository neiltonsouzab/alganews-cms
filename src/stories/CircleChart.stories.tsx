import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircleChart from '../components/CircleChart';
export default {
  title: 'Example/CircleChart',
  component: CircleChart,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      }
    }
  }
} as ComponentMeta<typeof CircleChart>;

const Template: ComponentStory<typeof CircleChart> = (args) => <CircleChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  progress: 80,
  size: 150
};