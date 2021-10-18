import * as Styled from './styles';

interface NoDataProps {
  height?: number;
}

export default function NoData({ height = 120 }: NoDataProps) {
  return (
    <Styled.Wrapper height={height}>
      <Styled.Message>Sem dados para exibir</Styled.Message>
      <Styled.SadFace>{':('}</Styled.SadFace>
    </Styled.Wrapper>
  )
}