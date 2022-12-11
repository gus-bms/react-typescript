import React, { useState } from 'react';
import Km2Miles from './km2Miles';
import Minutes2Hours from './minutes2Hours';

const LayoutForConverter = () => {
  const [index, setIndex] = useState('x');
  const onSelect = (event: any) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="x">select your options</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">KiloMeters & Miles</option>
      </select>
      <hr />
      {index === 'x' ? 'select your Options' : null}
      {index === '0' ? <Km2Miles /> : null}
      {index === '1' ? <Minutes2Hours /> : null}
    </div>
  );
};
export default LayoutForConverter;
