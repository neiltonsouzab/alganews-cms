import { ReactNode } from 'react';
import styled from 'styled-components';

interface ParagraphProps {
  size?: 'default' | 'small';
  children: ReactNode;
}

export default function Paragraph({ size = 'default', children }: ParagraphProps) {
  return <StyledParagraph size={size}>{children}</StyledParagraph>
}

const StyledParagraph = styled.p<{ size: 'default' | 'small' }>`
  font-size: ${props => props.size === 'default' ? '14' : '12'}px;
  line-height: ${props => props.size === 'default' ? '25' : '20'}px;
  color: #274060;
`