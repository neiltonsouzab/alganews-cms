import { WithContext as ReactTagInput, Tag } from 'react-tag-input';

import * as Styled from './styles';

interface TagInputProps {
  placeholder: string;
  onAdd: (tag: Tag) => any;
  onDelete: (id: number) => any;
  tags: Tag[]
}

const KeyCodes = {
  comma: 188,
  enter: 13,
  tab: 9,
}

export default function TagInput({ placeholder, onAdd, onDelete, tags }: TagInputProps) {
  return (
    <Styled.Wrapper>
      <ReactTagInput
        placeholder={placeholder}
        handleAddition={onAdd}
        handleDelete={onDelete}
        allowDragDrop={false}
        autofocus={false}
        tags={tags}
        delimiters={[KeyCodes.comma, KeyCodes.enter, KeyCodes.tab]}
      />
    </Styled.Wrapper>
  )
}