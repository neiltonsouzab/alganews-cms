import * as Styled from './styles';

interface ValueDescriptorProps {
  isCurrency?: boolean;
  description: string;
  value: number;
  variant: 'primary' | 'default';
}

export default function ValueDescriptor({ isCurrency, description, value, variant }: ValueDescriptorProps) {
  return (
    <Styled.Wrapper variant={variant}>
      <span className="description">{description}:</span>
      <div>
        {isCurrency && <span className="currency">{'R$'}</span>}
        <span className="value">{value.toLocaleString('pt-BR')}</span>
      </div>
    </Styled.Wrapper>
  )
}