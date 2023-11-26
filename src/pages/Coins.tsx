
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

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];


function Coins() {
  return (
    <Container>
      <AppContainer>
        <Header>
          <Title>🪙 Coin Tracker! 🪙</Title>
        </Header>
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinsList>
      </AppContainer>
    </Container>
  );
}

export default Coins;