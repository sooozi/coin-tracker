import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";


interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
  }

function Price() {
    const coinId = useOutletContext();
    const { isLoading : iHistoricalLoading, data : iHistorical } = useQuery<IHistorical>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(`${coinId}`)
    );

    const loading = iHistoricalLoading;

    return (
        <>
            {loading ? (
            "Loading chart..."
            ) : (<h1>{iHistorical?.volume}</h1>)}
        </>
    );
}
  

export default Price;