/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

const Container = styled.div`
`;

const GridWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.overviewBgColor};
  padding: 10px;
  border-radius: 10px;
  width: 100%;
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
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
    }
    .txt_desc {
      line-height: 1.5;
      margin: 0;
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

const PercentBox = styled.div<{ percent: number | undefined }>`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.percent
      ? props.percent > 0
        ? "rgb(218, 81, 87)"
        : props.percent < 0
        ? "rgb(72, 128, 238)"
        : "#000"
      : "none"};
  i {
      font-size: 15px;
      margin-left: 6px;
      display: inline-block;
    }
`;

const Percent = styled.span`
  margin: 0 !important;
`;

const ArrowIcon = styled.i`
  color: inherit; 
`;


interface IPriceProps {
  quotes: {
    USD: {
        percent_change_1h: number;
        percent_change_12h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        percent_change_30d: number;
        percent_change_1y: number;
      };
  };
}

function Price() {
    const coinId = useOutletContext();
    const { isLoading: IPriceLoading, data: IPriceData } = useQuery<IPriceProps>(
        ["tickers", coinId],
        () => fetchCoinTickers(`${coinId}`)
      );

    const loading = IPriceLoading;
    const mql = matchMedia("screen and (min-width: 400px)");

  return (
    <Container>
        {loading ? (
          <>Loading...💤</>
        ) : (
          <>
            <GridWrapper>
              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">From 1 hour</span>
                  <PercentBox percent={IPriceData?.quotes.USD.percent_change_1h}>
                    <Percent>
                      {IPriceData?.quotes.USD.percent_change_1h && IPriceData?.quotes.USD.percent_change_1h > 0
                        ? `+${IPriceData?.quotes.USD.percent_change_1h}%`
                        : `${IPriceData?.quotes.USD.percent_change_1h}%`}
                    </Percent>
                    {IPriceData?.quotes.USD.percent_change_1h ? (
                      IPriceData?.quotes.USD.percent_change_1h > 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-up fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-up fa-lg"></i>
                        )
                      ) : IPriceData?.quotes.USD.percent_change_1h < 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-down fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-down fa-lg"></i>
                        )
                      ) : mql.matches ? (
                        <i className="fa-solid fa-minus fa-2x"></i>
                      ) : (
                        <i className="fa-solid fa-minus fa-lg"></i>
                      )
                    ) : mql.matches ? (
                      <i className="fa-solid fa-minus fa-2x"></i>
                    ) : (
                      <i className="fa-solid fa-minus fa-lg"></i>
                    )}
                  </PercentBox>
                </OverviewItem>
              </Overview>

              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">From 12 hour</span>
                  <PercentBox percent={IPriceData?.quotes.USD.percent_change_12h}>
                    <Percent>
                      {IPriceData?.quotes.USD.percent_change_12h && IPriceData?.quotes.USD.percent_change_12h > 0
                        ? `+${IPriceData?.quotes.USD.percent_change_12h}%`
                        : `${IPriceData?.quotes.USD.percent_change_12h}%`}
                    </Percent>
                    {IPriceData?.quotes.USD.percent_change_12h ? (
                      IPriceData?.quotes.USD.percent_change_12h > 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-up fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-up fa-lg"></i>
                        )
                      ) : IPriceData?.quotes.USD.percent_change_12h < 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-down fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-down fa-lg"></i>
                        )
                      ) : mql.matches ? (
                        <i className="fa-solid fa-minus fa-2x"></i>
                      ) : (
                        <i className="fa-solid fa-minus fa-lg"></i>
                      )
                    ) : mql.matches ? (
                      <i className="fa-solid fa-minus fa-2x"></i>
                    ) : (
                      <i className="fa-solid fa-minus fa-lg"></i>
                    )}
                  </PercentBox>
                </OverviewItem>
              </Overview>
              
              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">From 24 hour</span>
                  <PercentBox percent={IPriceData?.quotes.USD.percent_change_24h}>
                    <Percent>
                      {IPriceData?.quotes.USD.percent_change_24h && IPriceData?.quotes.USD.percent_change_24h > 0
                        ? `+${IPriceData?.quotes.USD.percent_change_24h}%`
                        : `${IPriceData?.quotes.USD.percent_change_24h}%`}
                    </Percent>
                    {IPriceData?.quotes.USD.percent_change_24h ? (
                      IPriceData?.quotes.USD.percent_change_24h > 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-up fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-up fa-lg"></i>
                        )
                      ) : IPriceData?.quotes.USD.percent_change_24h < 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-down fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-down fa-lg"></i>
                        )
                      ) : mql.matches ? (
                        <i className="fa-solid fa-minus fa-2x"></i>
                      ) : (
                        <i className="fa-solid fa-minus fa-lg"></i>
                      )
                    ) : mql.matches ? (
                      <i className="fa-solid fa-minus fa-2x"></i>
                    ) : (
                      <i className="fa-solid fa-minus fa-lg"></i>
                    )}
                  </PercentBox>
                </OverviewItem>
              </Overview>

              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">From 1 week</span>
                  <PercentBox percent={IPriceData?.quotes.USD.percent_change_7d}>
                    <Percent>
                      {IPriceData?.quotes.USD.percent_change_7d && IPriceData?.quotes.USD.percent_change_7d > 0
                        ? `+${IPriceData?.quotes.USD.percent_change_7d}%`
                        : `${IPriceData?.quotes.USD.percent_change_7d}%`}
                    </Percent>
                    {IPriceData?.quotes.USD.percent_change_7d ? (
                      IPriceData?.quotes.USD.percent_change_7d > 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-up fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-up fa-lg"></i>
                        )
                      ) : IPriceData?.quotes.USD.percent_change_7d < 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-down fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-down fa-lg"></i>
                        )
                      ) : mql.matches ? (
                        <i className="fa-solid fa-minus fa-2x"></i>
                      ) : (
                        <i className="fa-solid fa-minus fa-lg"></i>
                      )
                    ) : mql.matches ? (
                      <i className="fa-solid fa-minus fa-2x"></i>
                    ) : (
                      <i className="fa-solid fa-minus fa-lg"></i>
                    )}
                  </PercentBox>
                </OverviewItem>
              </Overview>

              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">From 1 month</span>
                  <PercentBox percent={IPriceData?.quotes.USD.percent_change_30d}>
                    <Percent>
                      {IPriceData?.quotes.USD.percent_change_30d && IPriceData?.quotes.USD.percent_change_30d > 0
                        ? `+${IPriceData?.quotes.USD.percent_change_30d}%`
                        : `${IPriceData?.quotes.USD.percent_change_30d}%`}
                    </Percent>
                    {IPriceData?.quotes.USD.percent_change_30d ? (
                      IPriceData?.quotes.USD.percent_change_30d > 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-up fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-up fa-lg"></i>
                        )
                      ) : IPriceData?.quotes.USD.percent_change_30d < 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-down fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-down fa-lg"></i>
                        )
                      ) : mql.matches ? (
                        <i className="fa-solid fa-minus fa-2x"></i>
                      ) : (
                        <i className="fa-solid fa-minus fa-lg"></i>
                      )
                    ) : mql.matches ? (
                      <i className="fa-solid fa-minus fa-2x"></i>
                    ) : (
                      <i className="fa-solid fa-minus fa-lg"></i>
                    )}
                  </PercentBox>
                </OverviewItem>
              </Overview>
              
              <Overview>
                <OverviewItem className="no_flex">
                  <span className="txt_tit">From 1 year</span>
                  <PercentBox percent={IPriceData?.quotes.USD.percent_change_1y}>
                    <Percent>
                      {IPriceData?.quotes.USD.percent_change_1y && IPriceData?.quotes.USD.percent_change_1y > 0
                        ? `+${IPriceData?.quotes.USD.percent_change_1y}%`
                        : `${IPriceData?.quotes.USD.percent_change_1y}%`}
                    </Percent>
                    {IPriceData?.quotes.USD.percent_change_1y ? (
                      IPriceData?.quotes.USD.percent_change_1y > 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-up fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-up fa-lg"></i>
                        )
                      ) : IPriceData?.quotes.USD.percent_change_1y < 0 ? (
                        mql.matches ? (
                          <i className="fa-solid fa-arrow-trend-down fa-2x"></i>
                        ) : (
                          <i className="fa-solid fa-arrow-trend-down fa-lg"></i>
                        )
                      ) : mql.matches ? (
                        <i className="fa-solid fa-minus fa-2x"></i>
                      ) : (
                        <i className="fa-solid fa-minus fa-lg"></i>
                      )
                    ) : mql.matches ? (
                      <i className="fa-solid fa-minus fa-2x"></i>
                    ) : (
                      <i className="fa-solid fa-minus fa-lg"></i>
                    )}
                  </PercentBox>
                </OverviewItem>
              </Overview>
            </GridWrapper>
          </>
        )}
    </Container>
  );
}
  

export default Price;