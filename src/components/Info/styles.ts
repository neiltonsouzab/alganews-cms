import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 373px;
  padding: 24px;
  display: flex;
  gap: 16px;

  background-color: #F3F8FA;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  color: #274060;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`;

export const Message = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;