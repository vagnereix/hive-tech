import { Project } from '../Project';

import { Container, Content, Text, Image } from './styles';

import img from '../../assets/favicon-darken.svg';
import Aos from 'aos';
import { useEffect } from 'react';

export function Projects() {
  return (
    <Container>
      <Text>Nossos projetos</Text>
      <Image src={img} alt='Logo darken' />

      <Content>
        <Project />
        <Project />
        <Project />
        <Project />
      </Content>
    </Container>
  );
}
