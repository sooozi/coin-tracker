/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
// import { fetchCoins } from "../api";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 22rem;
  margin: 0 auto;
  padding: 20px;
`;

const AppContainer = styled.div`
  padding: 0px 15px;
  width: 100%;
  min-width: 300px;
  min-height: 600px;
  max-height: 600px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
`;

const Header = styled.div`
  height: 12vh;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const CoinsList = styled.ul`
  overflow-y: auto;
  height: calc(600px - 15vh);
`;

const Coin = styled.li`
  margin: 0 5px 10px 0;
  a {
    display: flex;
    align-items: center;
    border-radius: 15px;
    color: ${props => props.theme.textColor};
    padding: 17px 10px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      background-color: ${props => props.theme.contBgColor};
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: clamp(13px, 2rem, 20px);
  color: ${(props) => props.theme.accentColor};
  font-weight: bold;
`;

const Img = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 1rem;
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
  // useQuery('allCoins', fetchCoins);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom(prev => !prev)
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
      <Helmet>
        <title>COIN Tracker</title>
      </Helmet>
      <AppContainer>
        <Header>
          <img className="main_logo" src={process.env.PUBLIC_URL + '/img/coin-app-logo.png'} alt="Example" />
          <Title>COIN Tracker</Title>
          <button onClick={toggleDarkAtom}>Toggle Mode</button>
        </Header>
        {loading ? ("Loading...🪄") : (<CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/coin-tracker/${coin.id}`} state={{ name: coin.name }}>
              <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
              {coin.name} &rarr;
            </Link>
          </Coin>
          
        ))}
      </CoinsList>)}
      </AppContainer>
    </Container>
  );
}
export default Coins;