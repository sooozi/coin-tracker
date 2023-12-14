import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface ChartPropsData {
  coinId : string
}
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

function Chart() {
  const coinId =useOutletContext();
  const { isLoading, data } = useQuery<IHistorical>(["ohlcv", coinId], () =>
    fetchCoinHistory(`${coinId}`)
  );


  return (
        <>Charttt${coinId}</>
      
  );
}


export default Chart;