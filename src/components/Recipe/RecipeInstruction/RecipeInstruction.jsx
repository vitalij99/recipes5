import Container from 'components/Container/Container';
import {
  InstructionDescrContainer,
  InstructionImg,
  InstructionImgContainer,
  InstructionTitle,
  Wrapper,
} from './RecipeInstruction.styled';
import InstructionList from '../InstructionList/InstructionList';
import defaultRecipeImage from '../../../images/Recipe/defaultRecipeImage.webp';

function RecipeInstruction({ instructions, thumb }) {
  return (
    <Container>
      <Wrapper>
        <InstructionDescrContainer>
          <InstructionTitle>Recipe Preparation</InstructionTitle>
          <InstructionList instructions={instructions} />
        </InstructionDescrContainer>
        <InstructionImgContainer>
          <InstructionImg
            src={thumb ? thumb : defaultRecipeImage}
            alt="Recipe foto"
          />
        </InstructionImgContainer>
      </Wrapper>
    </Container>
  );
}

export default RecipeInstruction;
