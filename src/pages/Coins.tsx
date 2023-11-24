import { Link } from "react-router-dom";

function Coins() {
    return (
        <div>
          <h1>Coins</h1>
          <p>가장 먼저 보여지는 페이지입니다.</p>
          <Link to="/coin">코인페이지</Link>
        </div>
      );
}

export default Coins;