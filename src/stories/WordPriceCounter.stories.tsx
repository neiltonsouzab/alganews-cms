import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WordPriceCounter from '../components/WordPriceCounter';
export default {
  title: 'Example/WordPriceCounter',
  component: WordPriceCounter,
} as ComponentMeta<typeof WordPriceCounter>;

const Template: ComponentStory<typeof WordPriceCounter> = (args) => <WordPriceCounter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  wordsCount: 20,
  pricePerWord: 0.25
};
