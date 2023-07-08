import errorImage from 'images/error-404.png';

const Error = () => (
  <>
    <img src={errorImage} alt="error" width={259} height={170} loading="lazy" />
    <p>We are sorry,</p>
    <p>but the page you were looking for can’t be found...</p>
  </>
);

export default Error;
