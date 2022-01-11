import { useState } from "react";

function Coins({ price }) {
  const [money, setMoney] = useState(0);
  const [coin, setCoin] = useState(0);

  const totalCoins = (e) => {
    const val = e.target.value;
    setCoin((coin) => val / price);
    setMoney(val);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="cash $"
        onChange={totalCoins}
        value={money}
      ></input>
      <p>{coin} coins</p>
    </div>
  );
}

export default Coins;
