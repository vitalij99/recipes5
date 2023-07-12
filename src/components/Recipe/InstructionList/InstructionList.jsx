import { InstructionContainer } from './Instruction.styled';

function InstructionList({ instructions }) {
  const markupList = instructions
    ?.split('\r\n')
    .filter(elem => elem.trim() !== '' && !/^\d+\./.test(elem.trim()))
    .map((elem, index) => {
      return (
        <li key={index}>
          <span>{index + 1}</span>
          <p>{elem}</p>
        </li>
      );
    });
  return (
    <>
      <InstructionContainer>{markupList}</InstructionContainer>
    </>
  );
}

export default InstructionList;
