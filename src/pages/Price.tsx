/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinHistory } from "../api";

const Container = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

const GridWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.no_flex {
    display: block;
    span {
      display: block;
    }
    .txt_tit {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
    }
    .txt_desc {
      line-height: 1.5;
    }
  }
  span {
    font-size: 12px;
  }
  span:first-child {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 5px;
  }
`;

interface IPriceProps {
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

function Price() {
    const coinId =useOutletContext();
    // useQuery<IPriceProps>(["ohlcv", coinId], () => fetchCoinHistory(`${coinId}`)
    // );
    const { isLoading: IPriceLoading, data: IPriceData } = useQuery<IPriceProps>(
        ["tickers", coinId],
        () => fetchCoinHistory(`${coinId}`)
      );

      const loading = IPriceLoading;

  return (
    <Container>
        {loading ? (
          <>Loading...💤</>
        ) : (
          <>
            <GridWrapper>
              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">Price Change (1 hour)</span>
                  <span className="txt_desc">{IPriceData?.quotes.USD.percent_change_1h}</span>
                </OverviewItem>
              </Overview>

              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">Price Change (12 hour)</span>
                  <span className="txt_desc">{IPriceData?.quotes.USD.percent_change_12h}</span>
                </OverviewItem>
              </Overview>
              
              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">Price Change (24 hour)</span>
                  <span className="txt_desc">{IPriceData?.quotes.USD.percent_change_24h}</span>
                </OverviewItem>
              </Overview>

              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">Price Change (1 week)</span>
                  <span className="txt_desc">{IPriceData?.quotes.USD.percent_change_7d}</span>
                </OverviewItem>
              </Overview>

              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">Price Change (1 month)</span>
                  <span className="txt_desc">{IPriceData?.quotes.USD.percent_change_30d}</span>
                </OverviewItem>
              </Overview>
              
              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">Price Change (1 year)</span>
                  <span className="txt_desc">{IPriceData?.quotes.USD.percent_change_1y}</span>
                </OverviewItem>
              </Overview>


            </GridWrapper>
          </>
        )}
    </Container>
  );
}
  

export default Price;