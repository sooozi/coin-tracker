import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface ChartPropsData {
  coinId : string
}
function Chart() {
  const coinId =useOutletContext();
  const { isLoading : ChartPropsLoading, data : ChartPropsData } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(`${coinId}`)
  );

  const loading = ChartPropsLoading;

  return (
    <>
      {loading ? (
              <>Loading...💤</>
            ) : (
              <>Charttt${coinId}</>
            )
      } 
    </>
  );
}


export default Chart;