import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ValueDescriptor from '../app/components/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
} as ComponentMeta<typeof ValueDescriptor>;

const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  description: 'ganhos na semana',
  value: 560322.02,
}

export const DefaultCurrency = Template.bind({});
DefaultCurrency.args = {
  variant: 'default',
  value: 560322.02,
  description: 'ganhos na semana',
  isCurrency: true,
}


export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  description: 'ganhos na semana',
  value: 560322.02,
}

export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = {
  variant: 'primary',
  description: 'ganhos na semana',
  value: 560322.02,
  isCurrency: true,
}