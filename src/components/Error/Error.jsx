import Container from 'components/Container/Container';
import errorImage from 'images/error-404.png';
import { Img, BoldText, Text } from './Error.style';

const Error = () => (
  <Container>
    <Img src={errorImage} alt="error" loading="lazy" />
    <BoldText>We are sorry,</BoldText>
    <Text>but the page you were looking for can’t be found...</Text>
  </Container>
);

export default Error;
