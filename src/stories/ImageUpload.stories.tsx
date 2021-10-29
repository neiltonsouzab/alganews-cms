import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageUpload from '../app/components/ImageUpload';
export default {
  title: 'Example/ImageUpload',
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUpload> = (args) => <ImageUpload {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Thumbnail do post'
};