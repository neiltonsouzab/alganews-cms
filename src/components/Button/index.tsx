import Icon from '@mdi/react';
import { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'danger' | 'text' | 'primary';
  label: string;
  icon: string;
}

export default function Button({ variant, label, icon, ...rest }: ButtonProps) {
  return (
    <Styled.Wrapper
      variant={variant}
      {...rest}
    >
      {label}

      <Icon
        path={icon}
        size="24"
        color="#FFF"
      />
    </Styled.Wrapper>
  )
}