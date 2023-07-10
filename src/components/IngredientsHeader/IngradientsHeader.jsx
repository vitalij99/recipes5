import {
  HeaderColumn,
  HeadersContainer,
  IngradientsTitle,
  TitleColumn,
} from './IngradientsHeader.styled';

const IngradientsHeader = ({ info, actions }) => {
  return (
    <>
      <IngradientsTitle>
        <TitleColumn>{info}</TitleColumn>
        <HeadersContainer>
          <HeaderColumn>Number</HeaderColumn>
          <HeaderColumn>{actions}</HeaderColumn>
        </HeadersContainer>
      </IngradientsTitle>
    </>
  );
};

export default IngradientsHeader;
