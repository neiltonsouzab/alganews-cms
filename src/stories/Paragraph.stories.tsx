import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paragraph from '../components/Typograph/Paragraph';

export default {
  title: 'Typograph/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  children: 'Labore esse veniam excepteur deserunt do adipisicing pariatur elit cillum est officia. Qui labore aute id voluptate commodo veniam sint ut. Ex do aliqua duis mollit sunt minim tempor veniam esse sunt dolor. Proident laborum proident aliquip minim laboris. Et ullamco cillum est esse elit sunt do cillum consectetur ullamco.',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Laborum cupidatat Lorem consequat sit. Aliquip aute excepteur duis excepteur id amet voluptate do non adipisicing proident. Cupidatat ex qui irure labore laborum nulla duis ad consequat.',
};