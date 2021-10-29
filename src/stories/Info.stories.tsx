import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Info from '../app/components/Info';
export default {
  title: 'Example/Info',
  component: Info,
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Post não encontrado',
  message: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.'
};
