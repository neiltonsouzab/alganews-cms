import { useState, useEffect } from 'react';

import * as Styled from './styles';

interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: 'default' | 'primary';
  strokeWidth?: number;
}

export default function CircleChart({ theme, strokeWidth, size, progress, caption }: CircleChartProps) {
  const getThemeColor = () =>
    theme === 'primary' ? '#09F' : '#274060';

  const THEME = getThemeColor();
  const STROKE_WIDTH = strokeWidth || 8;
  const STROKE_COLOR = THEME;

  const CENTER = size / 2;
  const RADIUS = size / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const [offset, setOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * CIRCUMFERENCE;

    setOffset(progressOffset);
  }, [setOffset, CIRCUMFERENCE, progress, offset])

  return (
    <Styled.Wrapper>
      <Styled.SvgWrapper style={{ width: size, height: size }}>
        <Styled.Svg width={size} height={size}>
          <Styled.CircleBG
            cy={CENTER}
            cx={CENTER}
            r={RADIUS}
          />

          <Styled.Circle
            fill="none"
            cy={CENTER}
            cx={CENTER}
            r={RADIUS}
            stroke={STROKE_COLOR}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </Styled.Svg>

        <Styled.Percentage color={THEME}>
          {progress}%
        </Styled.Percentage>
      </Styled.SvgWrapper>

      {caption && <Styled.Caption>{caption}</Styled.Caption>}
    </Styled.Wrapper>
  )
}