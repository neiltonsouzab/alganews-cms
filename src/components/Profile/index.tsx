import * as Styled from './styles';

interface ProfileProps {
  name: string;
  description: string;
}

export default function Profile({ name, description }: ProfileProps) {
  return (
    <Styled.Wrapper>
      <Styled.Avatar src='https://github.com/neiltonsouzab.png' alt={name} />

      <Styled.Content>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Description>{description}</Styled.Description>
      </Styled.Content>
    </Styled.Wrapper>
  )
}