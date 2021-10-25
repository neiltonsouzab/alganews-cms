import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorDisplay from '../components/ErrorDisplay';
export default {
  title: 'Example/ErrorDisplay',
  component: ErrorDisplay,
} as ComponentMeta<typeof ErrorDisplay>;

const Template: ComponentStory<typeof ErrorDisplay> = (args) => <ErrorDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
};
