import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const clickBtn = () => {
    setCount((current) => current + 1);
  };

  return (
    <div>
      <h3>Count is {count}</h3>
      <button onClick={clickBtn}>count</button>
    </div>
  );
};

export default Counter;
