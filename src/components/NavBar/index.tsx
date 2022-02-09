import { Container, Header, Image, List, ListItem } from './styles';

import logoImg from '../../assets/favicon.svg';

export function NavBar() {
  return (
    <Header>
      <Container>
        <Image
          data-aos='entry-animation'
          tabIndex={1}
          src={logoImg}
          alt='Logo Hiv Tech'
        />

        <List role='list' data-aos='entry-animation'>
          <ListItem>Projetos</ListItem>
          <ListItem>Resumo</ListItem>
          <ListItem>Contato</ListItem>
        </List>
      </Container>
    </Header>
  );
}
