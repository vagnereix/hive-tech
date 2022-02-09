import { Container, Content, Image, Text } from './styles';

import image from '../../assets/favicon.svg';
import imageDark from '../../assets/favicon-darken.svg';

export function MainProject() {
  return (
    <Container>
      <Content>
        <Text data-aos='zindex'>Do you like what you see?</Text>

        <Image
          data-aos='imageAnimation'
          alt='Logo Animated'
          src={image}
          style={{ ['--i' as string]: '1' }}
        />
        <Image
          data-aos='imageAnimation'
          alt='Logo Animated'
          src={imageDark}
          style={{ ['--i' as string]: '2' }}
        />
        <Image
          data-aos='imageAnimation'
          alt='Logo Animated'
          src={image}
          style={{ ['--i' as string]: '3' }}
        />
        <Image
          data-aos='imageAnimation'
          alt='Logo Animated'
          src={imageDark}
          style={{ ['--i' as string]: '4' }}
        />
      </Content>
    </Container>
  );
}
