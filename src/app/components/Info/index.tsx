import Icon from '@mdi/react';
import { mdiInformation } from '@mdi/js';

import * as Styled from './styles';

interface InfoProps {
  title: string;
  message: string;
}

export default function Info({ title, message }: InfoProps) {
  return (
    <Styled.Wrapper>
      <div>
        <Icon
          path={mdiInformation}
          color="#09F"
          size="48px" 
        />
      </div>
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Message>{message}</Styled.Message>
      </Styled.Content>
    </Styled.Wrapper>
  )
}