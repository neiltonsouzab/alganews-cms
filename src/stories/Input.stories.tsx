import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../app/components/Input';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'e.g: John Doe'
}

export const WithLabelAndPlaceHolder = Template.bind({});
WithLabelAndPlaceHolder.args = {
  label: 'Name',
  placeholder: 'e.g: John Doe'
}

export const WithLabelContent = Template.bind({});
WithLabelContent.args = {
  label: 'Name',
  placeholder: 'e.g: John Doe',
  value: 'John Doe',
}

export const WithContent = Template.bind({});
WithContent.args = {
  value: 'John Doe',
}