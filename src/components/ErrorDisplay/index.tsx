import { mdiAlert } from '@mdi/js';
import Icon from '@mdi/react';
import Heading from '../Typograph/Heading';
import * as Styled from './styles';

interface ErrorDisplayProps {
  small?: boolean;
  title?: string;
  message?: string;
}

export default function ErrorDisplay({
  small = false,
  title = 'Error ao renderizar componente',
  message = 'Erro desconhecido' }: ErrorDisplayProps) {
  return (
    <Styled.Wrapper>
      <Icon
        path={mdiAlert}
        color="#274060"
        size={small ? '24px' : '48px'}
      />
      <Heading level={3} >{title}</Heading>
      <span>{message}</span>
    </Styled.Wrapper>
  )
}