import React, { useEffect, useState } from 'react';
import Dotwaves from '../loader/dotWave.loaders';
const CoinTracker = () => {
  type CoinInfo = {
    name: string;
    symbol: string;
    quotes: any;
  };
  const [loading, setLoading] = useState<boolean>(true);
  const [coins, setCoins] = useState<CoinInfo[]>([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers?limit=10')
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        console.log(json);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      });
  }, []);

  return (
    <div>
      <h1>This is Conin Tracker({coins.length})</h1>
      {loading ? <Dotwaves /> : null}
      <ul>
        {coins.map((coin, index) => (
          <li key={index}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoinTracker;
