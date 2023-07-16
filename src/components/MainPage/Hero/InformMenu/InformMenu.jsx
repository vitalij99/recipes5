import {
  InformWrapperStyled,
  BtnWrapperStyled,
  TextfStyled,
  BtnTextStyled,
} from './InformMenu.styled';
import { AiOutlineArrowRight } from 'react-icons/ai#AiOutlineArrowRight';

export const InformMenu = () => {
  return (
    <InformWrapperStyled>
      <TextfStyled>
        <span style={{ color: '#8BAA36' }}>Delicious and healthy</span> way to
        enjoy a variety of fresh ingredients in one satisfying meal
      </TextfStyled>
      <BtnWrapperStyled to="/categories/Breakfast">
        <BtnTextStyled>
          See all recipes <AiOutlineArrowRight />
        </BtnTextStyled>
      </BtnWrapperStyled>
    </InformWrapperStyled>
  );
};
