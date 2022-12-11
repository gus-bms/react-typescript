import React from 'react';
// import Header from './components/header';
// import Footer from './components/footer';
// import SideBar from './components/sideBar';
// import Layout from './components/layoutForConverter';
// import BoardList2 from './components/boardList2';
// import Card from './components/card';
// import ToDoList from './components/todoList';
// import CoinTracker from './components/coinTracker';
import MovieLIst from './components/movieList';

import styles from './css/App.module.css';

function App() {
  return (
    <div>
      <div>
        <h1 className={styles.title}>Welcome</h1>
        <MovieLIst />
      </div>
    </div>
  );
}

export default App;
