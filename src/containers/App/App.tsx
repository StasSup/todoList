import React from 'react';
import styles from './App.module.css';
import TodoList from '../TaskList/TaskList';
import News from '../News/News';

const App = () => {
  return (
    <div className={styles.root}>
      <TodoList />
      <News />
    </div>
  );
};

export default App;
