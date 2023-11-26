import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const AppContainer = styled.div`
  padding: 0px 20px;
  min-width: 400px;
  min-height: 600px;
  max-width: 25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  max-height: 40rem;
  overflow: hidden;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  /* color: ${(props) => props.theme.bgColor}; */
  margin-bottom: 10px;
  a {
    border-radius: 15px;
    color: ${props => props.theme.textColor};
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      background-color: ${props => props.theme.contBgColor};
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.accentColor};
  text-transform: uppercase;
  font-weight: bold;
`;

interface CoinInterface {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      (async() => {
          const response = await fetch("https://api.coinpaprika.com/v1/coins");
          const json = await response.json();
          setCoins(json.slice(0, 50));
          setLoading(false);
      })()
  }, []);

  return (
    <Container>
      <AppContainer>
        <Header>
          <Title>🪙 Coin Tracker! 🪙</Title>
        </Header>
        {loading ? ("Loading...🪄") : (<CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>)}
      </AppContainer>
    </Container>
  );
}

export default Coins;