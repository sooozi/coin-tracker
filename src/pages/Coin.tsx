/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { faFacebook, faGithub, faReddit, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from "react-query";
import { Link, Outlet, useLocation, useMatch, useParams } from 'react-router-dom';
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";

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
  padding: 0px 20px;
  width: 100%;
  min-width: 300px;
  min-height: 600px;
  max-height: 600px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgColor};
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

const Description = styled.p`
  margin: 2rem 0px;
  line-height: 1.34;
`;

const RankBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 50%;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
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
  color: ${(props) => props.iconColor};
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
  iconColor: string;
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
        <Header>
          <Title>
              {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
          </Title>
          <RankBox>
            <span>Rank:</span>
            <span>{infoData?.rank}</span>
          </RankBox>
        </Header>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            <Overview>
              <OverviewItem>
                <span>PRICE(KRW):</span>
                <span>${tickersData?.quotes.USD.price}</span>
              </OverviewItem>
              <OverviewItem>
                <span>percent_change_24h:</span>
                <span>{tickersData?.quotes.USD.percent_change_24h}</span>
              </OverviewItem>
            </Overview>
            <Description>
              <span>Description</span>
              {infoData?.description}
            </Description>
            <Overview>
              <OverviewItem>
                <span>Total Suply:</span>
                <span>{tickersData?.total_supply}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Max Supply:</span>
                <span>{tickersData?.max_supply}</span>
              </OverviewItem>
            </Overview>

            <Reference>
              <span>Reference Link</span>
              <div>
              <FontAwesomeIcon icon={faReddit} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faYoutube} />
                <RefLink
                  target="_blank"
                  iconColor="#171515"
                  isHref={infoData?.links.source_code}
                  href={infoData?.links.source_code}
                >
                  <div>
                    <FontAwesomeIcon icon={faGithub} style={{ color: '#171515' }}/>
                    <span>Github</span>
                  </div>
                </RefLink>
                <RefLink
                  target="_blank"
                  iconColor="#FF4500"
                  isHref={infoData?.links.reddit}
                  href={infoData?.links.reddit}
                >
                  <div>
                    <i className="fa-brands fa-reddit fa-lg"></i>
                    <FontAwesomeIcon icon={faReddit} style={{ color: '#FF4500' }}/>
                    <span>Reddit</span>
                  </div>
                </RefLink>
                <RefLink
                  target="_blank"
                  iconColor="#FE0000"
                  isHref={infoData?.links.youtube}
                  href={infoData?.links.youtube}
                >
                  <div>
                    <FontAwesomeIcon icon={faYoutube} style={{ color: '#FE0000' }} />
                    <i className="fa-brands fa-youtube fa-lg"></i>
                    <span>Youtube</span>
                  </div>
                </RefLink>
                <RefLink
                  target="_blank"
                  iconColor="#1877F2"
                  isHref={infoData?.links.facebook}
                  href={infoData?.links.facebook}
                >
                  <div>
                    <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} />
                    <i className="fa-brands fa-facebook fa-lg"></i>
                    <span>Facebook</span>
                  </div>
                </RefLink>
              </div>
            </Reference>

            <Tabs>
              <Tab isActive={priceMatch !== null}>
                <Link to={`/coin-tracker/${coinId}/Price`}>Price</Link>
              </Tab>
              <Tab isActive={chartMatch !== null}>
                <Link to={`/coin-tracker/${coinId}/Chart`}>Chart</Link>
              </Tab>
            </Tabs>

            <Outlet/>

          </>
        )}
      </AppContainer>
    </Container>
  );
}

export default Coin;