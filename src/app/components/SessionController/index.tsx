import Button from '../Button';
import * as Styled from './styles';

interface SessionControllerProps {
  name: string;
  description: string;
  onLogout: () => void;
}

export default function SessionController({ name, description, onLogout }: SessionControllerProps) {
  return (
    <Styled.Wrapper>
      <Styled.Avatar src="https://github.com/neiltonsouzab.png" alt={name} />

      <Styled.Name>{name}</Styled.Name>

      <Styled.Description>{description}</Styled.Description>

      <Button
        variant="danger"
        label="Logout"
        onClick={onLogout}
      />
    </Styled.Wrapper>
  )
}