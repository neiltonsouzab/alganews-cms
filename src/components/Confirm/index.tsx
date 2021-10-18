import Button from '../Button';
import Heading from '../Typograph/Heading';

import * as Styled from './styles';

interface ConfirmProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Confirm({ title, onConfirm, onCancel }: ConfirmProps) {
  return (
    <Styled.Wrapper>
      <Styled.Content>
          <Heading level={3}>
            {title}
          </Heading>

        <Styled.Buttons>
          <Button
            variant="danger"
            label="Não"
            onClick={onCancel}
          />
          <Button
            variant="primary"
            label="Sim" 
            onClick={onConfirm}
          />
        </Styled.Buttons>
      </Styled.Content>
    </Styled.Wrapper>
  )
}