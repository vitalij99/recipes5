import Container from 'components/Container/Container';
import errorImage from 'images/error-404.png';
import { Img, TextContainer, BoldText, Text } from './Error.style';

const Error = () => (
  <Container>
    <Img src={errorImage} alt="error" loading="lazy" />
    <TextContainer>
      <BoldText>We are sorry,</BoldText>
      <Text>but the page you were looking for can’t be found...</Text>
    </TextContainer>
  </Container>
);

export default Error;
