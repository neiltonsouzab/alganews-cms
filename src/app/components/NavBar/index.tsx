import { NavLink } from 'react-router-dom';

import * as Styled from './styles';

export default function NavBar() {
  return (
    <Styled.List>
      <Styled.Item>
        <NavLink to="/home" exact>Home</NavLink>
      </Styled.Item>
      <Styled.Item>
        <NavLink to="/contacts" exact>Contatos</NavLink>
      </Styled.Item>
    </Styled.List>
  )
}