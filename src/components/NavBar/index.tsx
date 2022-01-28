import { Container, Header, Image, List, ListItem } from './styles';

import logoImg from '../../assets/favicon.svg';

export function NavBar() {
  return (
    <Header>
      <Container>
        <Image src={logoImg} alt='Logo Hiv Tech' />

        <List>
          <ListItem>Projetos</ListItem>
          <ListItem>Resumo</ListItem>
          <ListItem>Contato</ListItem>
        </List>
      </Container>
    </Header>
  );
}
