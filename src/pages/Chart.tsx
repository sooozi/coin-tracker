import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { fetchCoinHistory } from "../api";
import { isDarkAtom } from "../atoms";


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
  const isDark = useRecoilValue(isDarkAtom);
  const coinId =useOutletContext();
  const { isLoading, data } = useQuery<IHistorical>(["ohlcv", coinId], () =>
    fetchCoinHistory(`${coinId}`)
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: Array.isArray(data)
              ? data?.map((price) => parseFloat(price.close)) ?? []
              : [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: Array.isArray(data) ? data?.map((price) => new Date(Number(price.time_close) * 1000).toUTCString()) ?? [] : [],
            },
            fill:{
              type: "gradient",
              gradient: { gradientToColors: ["rgb(92, 157, 208)"], stops: [0, 100]},
            },
            colors: ["rgb(99, 89, 236)"],
            tooltip: {
              y: {
                formatter: (value) => `${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
              }
            },
          }}
        />
      )}
    </div>
  );
}


export default Chart;