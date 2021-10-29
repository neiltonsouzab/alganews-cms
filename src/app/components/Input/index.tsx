import { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...rest }: InputProps) {
  return (
    <Styled.Wrapper>
      { label && <span className="label">{label}:</span>}

      <input {...rest} />
    </Styled.Wrapper>
  )
}