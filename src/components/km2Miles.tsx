import React, { useState } from 'react';

const Km2Miles = () => {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const onChange = (event: any) => setAmount(event.target.value);
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((currnet) => !currnet);
  };
  return (
    <div>
      <div>
        <label htmlFor="km">KiloMeters</label>
        <input
          id="km"
          placeholder="KiloMeters"
          type="number"
          value={!flipped ? amount : (amount * 1.609344).toFixed(2)}
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor="miles">Miles</label>
        <input
          id="miles"
          placeholder="Miles"
          type="Number"
          value={flipped ? amount : (amount / 1.609344).toFixed(2)}
          onChange={onChange}
          disabled={!flipped}
        ></input>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>{flipped ? 'change miles' : 'change kilometers'}</button>
      </div>
    </div>
  );
};

export default Km2Miles;
