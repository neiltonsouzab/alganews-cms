import * as Styled from './styles';

interface FieldDescriptorProps {
  field: string;
  value: string;
}

export default function FieldDescriptor({ field, value}: FieldDescriptorProps) {
  return (
    <Styled.Wrapper>
      <span className="field">{field}:</span>
      <span className="value">{value}</span>
    </Styled.Wrapper>
  )
}