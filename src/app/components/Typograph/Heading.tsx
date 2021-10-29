import { ReactNode } from "react";
import styled  from "styled-components";

interface HeadingProps {
  level: 1 | 2 | 3;
  children: ReactNode;
}

export default function Heading({ level, children }: HeadingProps) {
  const HeadingComponent = ({
    1: Heading1,
    2: Heading2,
    3: Heading3
  }[level])

  return <HeadingComponent>{children}</HeadingComponent>
}

const Heading1 = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: #274060;
`;

const Heading2 = styled.h2`
  font-size: 24px;
  font-weight: 900;
  color: #274060;
`;

const Heading3 = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: #274060;
`;