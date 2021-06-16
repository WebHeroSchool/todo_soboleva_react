import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import './App.css';

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
  <div className="wrap">
   <h1 className="wrap_title"> Важные дела: </h1>
   <InputItem />
   <ItemList items={items} />
   <Footer count={3} />
  </div>);
};

export default App;
