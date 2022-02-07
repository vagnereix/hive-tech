import { GitHubIcon } from '../../assets/Icons/GitHubIcon';
import { LinksIcon } from '../../assets/Icons/LinksIcon';
import {
  Container,
  Image,
  ImageBox,
  Content,
  Data,
  LinkIcons,
  Title,
  Description,
} from './styles';

export function Project() {
  return (
    <Container data-aos='entry-animation' data-aos-easing='linear'>
      <ImageBox>
        <Image></Image>
      </ImageBox>

      <Content>
        <Data>
          <Title>Nome do projeto</Title>
          <Description>Descrição do projeto</Description>
        </Data>

        <LinkIcons>
          <GitHubIcon />
          <LinksIcon />
        </LinkIcons>
      </Content>
    </Container>
  );
}
