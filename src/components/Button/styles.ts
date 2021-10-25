import styled from 'styled-components';
import { transparentize } from 'polished';

const THEME = {
  danger: {
    bg: '#F84735',
    color: '#FFFFFF',
    onHover: `
      box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
    `,
    disabled: {
      color: '#F84735',
      bg: transparentize(0.75, '#F84735')
    }
  },
  primary: {
    bg: '#0099FF',
    color: '#FFFFFF',
    onHover: `
      box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
    `,
    disabled: {
      color: '#FFFFFF',
      bg: transparentize(0.44, '#0099FF')
    }
  },
  text: {
    bg: 'transparent',
    color: '#274060',
    onHover: `
      border-color: #274060;
    `,
    disabled: {
      color: '#274060',
      bg: transparentize(0.44, '#508AC9')
    }
  }
}

export const Wrapper = styled.button<{
  variant: 'danger' | 'primary' | 'text'
}>`
  padding: 6px 8px 4px;

  border: 1px solid ${props => THEME[props.variant].bg};
  color: ${props => THEME[props.variant].color};
  background-color: ${props => THEME[props.variant].bg};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  &:hover, &:focus {
    ${props => THEME[props.variant].onHover}
  }

  &:disabled {
    background-color: ${props => THEME[props.variant].disabled.bg};
    color: ${props => THEME[props.variant].disabled.color};

    pointer-events: none;
    border-color: transparent;
  }
`;