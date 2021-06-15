import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import styles from './App.module.css';

const todoItem = 'Написать новое приложение';

const App = () => {
  const items = [
    {
        value: 'Написать новое приложение'
    },
    {
        value: 'прописать props'
     },
    {
        value: 'сделать все дела'
    }
];

  return (
  <div className={styles.wrap}>
   <h1 className={styles.title}> Важные дела: </h1>
   <InputItem />
   <ItemList items={items} />
   <Footer count={3} />
  </div>);
};

export default App;
