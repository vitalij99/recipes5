import { InstructionContainer } from './Instruction.styled';

function InstructionList({ instructions }) {
  const markupList = instructions.split('\r\n').map((elem, index) => {
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
