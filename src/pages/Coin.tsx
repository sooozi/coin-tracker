/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Params, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

const AppContainer = styled.div`
  padding: 0px 20px;
  min-width: 320px;
  min-height: 600px;
  max-width: 25rem;
  max-height: 600px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

interface RouteParams extends Params {
  coinId: string;
}

interface LocationState {
  state: {
    name: string;
  }
};

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as LocationState;

  return (
    <Container>
      <AppContainer>
        <Header>
          <Title>{state?.name || "Loading..."}</Title>
        </Header>
        {loading ? <Loader>Loading...</Loader> : null}
      </AppContainer>
    </Container>
  );
}

export default Coin;