/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { faFacebook, faGithub, faReddit, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from "react-query";
import { Link, Outlet, useLocation, useMatch, useParams } from 'react-router-dom';
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { theme } from '../theme';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 20rem;
  margin: 0 auto;
  padding: 20px;
`;

const AppContainer = styled.div`
  padding: 20px;
  width: 100%;
  min-width: 300px;
  min-height: 600px;
  max-height: 600px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgColor};
`;

const ContWrap = styled.div`
  overflow-y: auto;
  height: calc(600px - 20vh);
`;

const Nav = styled.div`
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const BtnToHome = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.grayText};
`;

const Header = styled.header`
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const TitleLogoCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TitleContWrap = styled.div`
  
`;

const TitleCont = styled.div`
  margin-bottom: 5px;
  span {
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${(props) => props.theme.accentColor};
`;

const Percent24h = styled.span<IPercent24h>`
  color: ${(props) =>
    props.percent24h && props.percent24h >= 0 ? "#DA5157" : "#4880EE"};
  font-size: 15px !important;
  font-weight: 600;
  span {
    color: ${(props) => props.theme.textColor};
    font-size: 15px !important;
    font-weight: normal;
    margin-left: 5px;
  }
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Description = styled.p`
  margin: 2rem 0px;
  line-height: 1.34;
`;

const RankBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  span {
    font-size: 14px;
    font-weight: bolder;
  }
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 5px;
  }
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 12px;
  }
  span:first-child {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
    color: inherit;
  }
`;

const Reference = styled.div`
  background-color: ${(props) => props.theme.divColor};
  border-radius: 15px;
  padding: 25px 22px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.textColor};
  > span {
    font-weight: 600;
    font-size: 18px;
    display: block;
    margin-bottom: 15px;
  }
`;

const RefLink = styled.a<Ireficon>`
  display: ${(props) => (props.isHref ? "block" : "none")};
  background-color: ${(props) => props.theme.grayDiv};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  :hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  }
  i {
    margin-right: 8px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
  }
`;

const IconBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 10px;
  svg {
    width: 15px;
    height: 15px;
  }
`;

const Img = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 1rem;
`;

interface IPercent24h {
  percent24h: number | undefined;
}

interface LocationState {
  state: {
    name: string;
  }
};

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
    links: {
      facebook?: string;
      reddit?: string;
      source_code?: string;
      youtube?: string;
    };
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
          price: number; // 현재 시세
          ath_date: string;
          ath_price: number;
          market_cap: number;
          market_cap_change_24h: number; // 시총 가격 변동률
          percent_change_1h: number;
          percent_change_6h: number;
          percent_change_12h: number;
          percent_change_24h: number;
          percent_change_7d: number;
          percent_change_30d: number;
          percent_change_15m: number;
          percent_change_30m: number;
          percent_change_1y: number;
          percent_from_price_ath: number;
          volume_24h: number; // 지난 24시간 거래량
          volume_24h_change_24h: number; // 지난 24시간 거래 변동률
        };
    };
}

interface Ireficon {
  isHref: string | undefined;
}

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation() as LocationState;
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  const priceMatch = useMatch("/coin-tracker/:coinId/Price");
  const chartMatch = useMatch("/coin-tracker/:coinId/Chart");
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000
    }
  );

  const loading = infoLoading || tickersLoading;
  
//   useEffect(() => {
//     (async() => {
//         const infoData = await (
//             await fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
//         ).json();
//         const priceData = await (
//             await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
//         ).json();
//         setInfo(infoData);
//         setPriceInfo(priceData);
//         setLoading(false);
//     })();
// }, [coinId]);

  return (
    <Container>
      <AppContainer>

        <Nav>
          <BtnToHome>
            <Link to={`/coin-tracker`}>
              <FontAwesomeIcon icon={faAngleLeft} style={{ color: theme.pointColor }}/>
              <span style={{ color: theme.pointColor, marginLeft : "0.5rem" }}>Go To Home</span>
            </Link>
          </BtnToHome>
        </Nav>

        <Header>
          <TitleLogoCont>
            <Img src={`https://coinicons-api.vercel.app/api/icon/${infoData?.symbol.toLowerCase()}`}/>
            <Title>
                {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
            </Title>
          </TitleLogoCont>

          <TitleWrap>
            <TitleContWrap>
              <TitleCont>
                <span>${tickersData?.quotes.USD.price.toFixed(2).toLocaleString()}</span>
              </TitleCont>
              <TitleCont>
                <Percent24h percent24h={tickersData?.quotes.USD.percent_change_24h}>
                  {tickersData?.quotes.USD.price && tickersData?.quotes.USD.percent_change_24h
                    ? tickersData?.quotes.USD.percent_change_24h >= 0
                      ? `+$${((tickersData?.quotes.USD.price * Math.abs(tickersData?.quotes.USD.percent_change_24h)) / 100).toFixed(2)}`
                      : `-$${((tickersData?.quotes.USD.price * Math.abs(tickersData?.quotes.USD.percent_change_24h)) / 100).toFixed(2)}`
                    : undefined}{" "}
                  ({tickersData?.quotes.USD.percent_change_24h}%) <span>24h ago</span>
                </Percent24h>
              </TitleCont>
            </TitleContWrap>

            <RankBox>
              <span>Rank</span>
              <span>{infoData?.rank}</span>
            </RankBox>
          </TitleWrap>
        </Header>

        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <ContWrap>
            <Tabs>
              <Tab isActive={priceMatch !== null}>
                <Link to={`/coin-tracker/${coinId}/Price`}>Price</Link>
              </Tab>
              <Tab isActive={chartMatch !== null}>
                <Link to={`/coin-tracker/${coinId}/Chart`}>Chart</Link>
              </Tab>
            </Tabs>

            <Outlet/>

            <Overview>
                <span>Description</span>
                <Description>
                  {infoData?.description}
                </Description>
            </Overview>
            <Overview>
              <OverviewItem>
                <span>Total Suply</span>
                <span>{tickersData?.total_supply}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Max Supply</span>
                <span>{tickersData?.max_supply}</span>
              </OverviewItem>
            </Overview>

            <Reference>
              <span>Reference Link</span>
              <div>
                <RefLink
                  target="_blank"
                  isHref={infoData?.links.source_code}
                  href={infoData?.links.source_code}
                >
                  <div>
                    <IconBox>
                      <FontAwesomeIcon icon={faGithub} style={{ color: '#171515' }}/>
                    </IconBox>
                    <span>Github</span>
                  </div>
                </RefLink>
                <RefLink
                  target="_blank"
                  isHref={infoData?.links.reddit}
                  href={infoData?.links.reddit}
                >
                  <div>
                    <IconBox>
                      <FontAwesomeIcon icon={faReddit} style={{ color: '#FF4500' }}/>
                    </IconBox>
                    <span>Reddit</span>
                  </div>
                </RefLink>
                <RefLink
                  target="_blank"
                  isHref={infoData?.links.youtube}
                  href={infoData?.links.youtube}
                >
                  <div>
                    <IconBox>
                      <FontAwesomeIcon icon={faYoutube} style={{ color: '#FE0000' }} />
                    </IconBox>
                    <span>Youtube</span>
                  </div>
                </RefLink>
                <RefLink
                  target="_blank"
                  isHref={infoData?.links.facebook}
                  href={infoData?.links.facebook}
                >
                  <div>
                    <IconBox> 
                      <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} />
                    </IconBox>
                    <span>Facebook</span>
                  </div>
                </RefLink>
              </div>
            </Reference>
          </ContWrap>
        )}
      </AppContainer>
    </Container>
  );
}

export default Coin;