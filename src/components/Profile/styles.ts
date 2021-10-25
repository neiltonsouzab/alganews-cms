import styled from 'styled-components';

export const Wrapper = styled.a`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 24px;

  border: solid 1px rgba(39, 64, 96, 0.1);

  cursor: pointer;
  
  &:hover {
    outline: 5px solid #0099FF;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const Content = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;

  color: #274060;
`;

export const Name = styled.span`
  font-size: 18px;
`;

export const Description = styled.span`
  font-size: 12px;
`;