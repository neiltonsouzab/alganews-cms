import styled from 'styled-components';

const THEME = {
  default: {
    color: '#244060'
  },
  primary: {
    color: '#0099FF'
  }
}

export const Wrapper = styled.div<{
  variant: 'primary' | 'default'
}>`
  display: flex;
  flex-direction: column;
  height: 36px;
  justify-content: space-between;

  span.description {
    font-size: 12px;
    color: #244060;
  }

  span.currency, span.value {
    font-size: 18px;
    font-weight: 900;

    color: ${props => THEME[props.variant].color};
  }
`;