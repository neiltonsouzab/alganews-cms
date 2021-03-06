import { mdiDelete, mdiUpload } from '@mdi/js';
import Icon from '@mdi/react';
import { ChangeEvent, useState } from 'react';

import * as Styled from './styles';

interface ImageUploadProps {
  label: string;
}

export default function ImageUpload({ label }: ImageUploadProps) {

  const [filePreview, setFilePreview] = useState<string | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', e => {
        setFilePreview(String(e.target?.result));
      });

      reader.readAsDataURL(file);
    }
  }

  if (filePreview) {
    return (
      <Styled.ImagePreviewWrapper>
        <Styled.ImagePreview preview={filePreview}>
          <Styled.RemoveButton>
            <span>Remover imagem</span>
            <Icon path={mdiDelete} size="24px" color="#274060" />
          </Styled.RemoveButton>
        </Styled.ImagePreview>
      </Styled.ImagePreviewWrapper>
    )
  }

  return (
    <Styled.Wrapper>
      <Styled.Label>
        <Icon
          size={'24px'}
          path={mdiUpload}
        />

        {label}

        <Styled.Input
          type="file"
          onChange={handleChange}
        />
      </Styled.Label>
    </Styled.Wrapper>
  )
}