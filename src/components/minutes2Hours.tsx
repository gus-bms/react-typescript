import React, { useState } from 'react';

const Minutes2Hours = () => {
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
        <label htmlFor="minutes">Minutes</label>
        <input
          id="minutes"
          placeholder="Minutes"
          type="number"
          value={!flipped ? amount : amount * 60}
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          id="hours"
          placeholder="Hours"
          type="Number"
          value={flipped ? amount : Math.round(amount / 60)}
          onChange={onChange}
          disabled={!flipped}
        ></input>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>{flipped ? 'change minutes' : 'change hours'}</button>
      </div>
    </div>
  );
};

export default Minutes2Hours;
