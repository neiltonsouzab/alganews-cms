import * as Styled from './styles';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';
import SessionController from '../../components/SessionController';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Logo />
      </Styled.Header>
      <Styled.Main>
        <Styled.Navigation>
          <NavBar />
        </Styled.Navigation>
        <Styled.FeaturedContent>
          {children}
        </Styled.FeaturedContent>
        <Styled.Aside>
          <SessionController
            name="Neilton Barbosa"
            description="Editor há 2 anos"
            onLogout={() => { }}
          />
        </Styled.Aside>
      </Styled.Main>
    </Styled.Wrapper>
  )
}