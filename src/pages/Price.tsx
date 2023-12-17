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
                <span>price</span>
                <>
                <span>Price Change (1 hour): {IPriceData?.quotes.USD.percent_change_24h}</span>
                </>
            </>
        )}
    </Container>
  );
}
  

export default Price;