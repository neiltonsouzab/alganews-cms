import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 12px;

  border: solid 1px rgba(39, 64, 96, 0.1);
  color: #274060;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const Name = styled.span`
  font-size: 18px;

  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
`;

export const Description = styled.span`
  font-size: 12px;
`;