import React, { useState, useEffect } from 'react';
import styles from '../css/Button.module.css';

// column 데이터 타입 정의
type StyleProps = {
  text: string;
};

const Hello = () => {
  useEffect(() => {
    console.log('created');
    return () => console.log('destroyed');
  });

  return <h1>Hello</h1>;
};

const Button = ({ text }: StyleProps) => {
  // declare useState
  const [count, setCount] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [showing, setShowing] = useState<boolean>(false);

  const changeCount = () => setCount((prev) => prev + 1);
  const changeSearch = (ev: any) => setSearch(ev.target.value);
  const changeShowing = () => setShowing(!showing);
  // declare useEffect
  useEffect(() => {
    console.log('i want find movie', search);
  }, [search]);
  useEffect(() => {
    console.log('i called only once');
  }, []);

  return (
    <div>
      <div>
        <input placeholder="영화를 검색하세요." value={search} onChange={changeSearch} />
      </div>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={changeShowing}>{showing ? 'hide' : 'show'}</button>

        <button className={styles.btn} onClick={changeCount}>
          {text} {count}
        </button>
      </div>
    </div>
  );
};

export default Button;
