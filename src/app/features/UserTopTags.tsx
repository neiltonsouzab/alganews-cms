import styled from 'styled-components';

import CircleChart from "../components/CircleChart";

export default function UserTopTags() {
  return (
    <StyledWrapper>
      <CircleChart progress={80} size={88} caption="JavaScript" theme="primary" />
      <CircleChart progress={30} size={88} caption="Java" />
      <CircleChart progress={24} size={88} caption="Scrum" />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`