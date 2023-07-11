import {
  HeaderColumn,
  HeadersContainer,
  IngredientsTitle,
  TitleColumn,
} from './IngredientsHeader.styled';

const IngredientsHeader = ({ info, actions }) => {
  return (
    <>
      <IngredientsTitle>
        <TitleColumn>{info}</TitleColumn>
        <HeadersContainer>
          <HeaderColumn>Number</HeaderColumn>
          <HeaderColumn>{actions}</HeaderColumn>
        </HeadersContainer>
      </IngredientsTitle>
    </>
  );
};

export default IngredientsHeader;
