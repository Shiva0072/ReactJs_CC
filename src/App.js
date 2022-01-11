import { useEffect, useState } from "react";
import Coins from "./Coins";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinPrice, setCoinPrice] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCoins(data);
        setLoading(false);
      });
  }, []);

  const onChange = (e) => {
    const val = e.target.value;
    setCoinPrice(val);
  };

  return (
    <div>
      <h1>Coins </h1>
      {loading ? <strong>Loading..</strong> : ""}
      <select onChange={onChange}>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name} {coin.symbol} : ${coin.quotes.USD.price.toFixed(2)}
          </option>
        ))}
      </select>
      <hr />
      {loading ? "" : <Coins price={coinPrice} />}
    </div>
  );
}

export default App;
