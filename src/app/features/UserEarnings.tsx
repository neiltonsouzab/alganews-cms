import styled from 'styled-components';
import ValueDescriptor from '../components/ValueDescriptor';

export default function UserEarnings() {
  return (
    <StyledWrapper>
      <ValueDescriptor
        isCurrency
        variant="primary"
        description="Ganhos no mês"
        value={56032.32}
      />
      <ValueDescriptor
        isCurrency
        variant="primary"
        description="Ganhos na semana"
        value={56032.32}
      />

      <ValueDescriptor
        isCurrency
        variant="default"
        description="Ganhos de sempre"
        value={56032.32}
      />

      <ValueDescriptor
        variant="default"
        description="Total de palavras"
        value={2345347}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`