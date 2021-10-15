import { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'danger' | 'text' | 'primary';
  label: string;
}

export default function Button({ variant, label, ...rest }: ButtonProps) {
  return (
    <Styled.Wrapper
      variant={variant}
      {...rest}
    >
      {label}
    </Styled.Wrapper>
  )
}