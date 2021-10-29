import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from 'react-tag-input';

import TagInput from '../app/components/TagInput';
export default {
  title: 'Example/TagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

const Template: ComponentStory<typeof TagInput> = (args) => <TagInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Insira as tags deste post',
  tags: [{ id: '1', text: 'JavaScript' }],
};

export const VariousTags = Template.bind({});
VariousTags.args = {
  placeholder: 'Insira as tags deste post',
  tags: [
    { id: '1', text: 'JavaScript' },
    { id: '2', text: 'TypeScript' },
    { id: '3', text: 'Node.JS' },
    { id: '4', text: 'ReactJS' },
  ],

};

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <TagInput
      placeholder="Insira as tags deste post"
      tags={tags}
      onAdd={data => setTags([...tags, data])}
      onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
    />
  )
}

