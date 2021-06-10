import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';

const todoItem = 'Написать новое приложение';

const App = () => (
  <div>
   <h1> Важные дела: </h1>
   <InputItem />
   <ItemList todoItem={todoItem} />
   <Footer count={3} />
  </div>
);

export default App;
