import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ImagePreview = styled.div<{ preview: string }>`
  height: 100%;

  background: url(${props => props.preview});
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagePreviewWrapper = styled.div`
  background-color: #274060;
  height: 240px;

  button {
    display: none;
  }

  &:hover {
    ${ImagePreview} {
      opacity: 0.7;
    }

    button {
      display: flex;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  background-color: #09F;
  color: #FFF;

  padding: 24px;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const RemoveButton = styled.button`
  height: 56px;
  padding: 16px;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  color: #274060;
  background: #FFFFFF;
  border: none;
  outline: none;

  cursor: pointer;

  span {
    font-size: 18px;
  }
`;
