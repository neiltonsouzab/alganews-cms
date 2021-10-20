import * as Styled from './styles';

interface ProgressBaProps {
  title: string;
  progress: number;
  theme: 'primary' | 'secondary';
  width?: number;
}

export default function ProgressBar({ title, progress, theme, width }: ProgressBaProps) {
  return (
    <Styled.ProgressBarWrapper style={{ width: width || 'auto' }}>
      <Styled.TextShadow progress={progress} theme={theme}>
        {title}
      </Styled.TextShadow>
      <Styled.CurrentProgress progress={progress} theme={theme}>
        <span>
          {title}
        </span>
      </Styled.CurrentProgress>
    </Styled.ProgressBarWrapper>
  )
}