import { useParams } from "react-router";

interface RouteParams {
  coinId: string;
  [key: string]: string | undefined;
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin : {coinId}</h1>;
}

export default Coin;