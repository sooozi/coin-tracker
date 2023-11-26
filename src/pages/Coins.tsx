
import styled from "styled-components";

const Title = styled.h1`
    color: ${({ theme }) => theme.accentColor};
`;


function Coins() {
  return (
    <>
      <Title>Coins Page & accentColor</Title>
      <h1>Coins</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
    </>
  );
}

export default Coins;