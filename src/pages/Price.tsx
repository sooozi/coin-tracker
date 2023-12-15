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
    percent_change_1h: number;
}

function Price() {
    const coinId =useOutletContext();
    // useQuery<IPriceProps>(["ohlcv", coinId], () => fetchCoinHistory(`${coinId}`)
    // );
    const { isLoading: IPriceLoading, data: IPriceData } = useQuery<IPriceProps>(
        ["ohlcv", coinId],
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
                <span>Price Change (1 hour): {IPriceData?.percent_change_1h}</span>
                </>
            </>
        )}
    </Container>
  );
}
  

export default Price;