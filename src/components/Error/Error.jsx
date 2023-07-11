import errorImage from 'images/error-404.svg';
import {
  ErrorContainer,
  Img,
  TextContainer,
  BoldText,
  Text,
} from './Error.styled';

const Error = () => (
  <ErrorContainer>
    <Img src={errorImage} alt="error" loading="lazy" />
    <TextContainer>
      <BoldText>We are sorry,</BoldText>
      <Text>but the page you were looking for can’t be found...</Text>
    </TextContainer>
  </ErrorContainer>
);

export default Error;
