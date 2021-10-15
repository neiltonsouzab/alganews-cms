import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 35px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: #274060;

  span.field {
    font-size: 12px;
    font-weight: 700;
    text-transform: lowercase;
  }

  span.value {
    font-size: 14px;
  }

`;