import React from 'react';
import styles from '../css/App.module.css';

const Dotwaves = () => {
  return (
    //https://uiball.com/loaders/ 참조
    <div className={styles.dot_wave}>
      <div className={styles.dot_wave__dot}></div>
      <div className={styles.dot_wave__dot}></div>
      <div className={styles.dot_wave__dot}></div>
      <div className={styles.dot_wave__dot}></div>
    </div>
  );
};

export default Dotwaves;
