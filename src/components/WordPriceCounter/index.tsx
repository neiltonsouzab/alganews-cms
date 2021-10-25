import * as Styled from './styles';

interface WordPriceCounterProps {
  wordsCount: number;
  pricePerWord: number;
}

export default function WordPriceCounter({ wordsCount, pricePerWord }: WordPriceCounterProps) {

  if (wordsCount < 0) {
    throw Error('A quantidade de palavra não pode ser negativa.');
  }

  return (
    <Styled.Wrapper>
      <Styled.WordCounter>{wordsCount} palavras</Styled.WordCounter>
      <Styled.PricePreview>
        {(wordsCount * pricePerWord).toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL', maximumFractionDigits: 2
        })}
      </Styled.PricePreview>
    </Styled.Wrapper>
  )
}