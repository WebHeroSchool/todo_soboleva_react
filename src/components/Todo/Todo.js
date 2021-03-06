import React from 'react';

import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

class Todo extends React.Component {
  state = {
     items: [
         {
                value: 'Написать новое приложение',
                isDone: true,
                id:1
          },
          {
                value: 'Прописать props',
                isDone: false,
                id:2
          },
          {
                value: 'Сделать все дела',
                isDone: true,
                id:3
          }
      ],
      count: 3
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ items: newItemList });
  };

  onClickDelete = id => {
    const deleteItemList = this.state.items.filter(item => item.id !==id);
    this.setState({ items: deleteItemList });
  };

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.count + 1
      }
    ],
    count: state.count + 1
  }));

 render() {
    return (
            <div className={styles.wrap}>
            <h1 className={styles.title}>Важные дела:</h1>
            <InputItem onClickAdd={this.onClickAdd} />
            <ItemList
               items={this.state.items}
               onClickDone={this.onClickDone}
               onClickDelete={this.onClickDelete}/>
            <Footer count={this.state.count}/>
        </div>);
  }
};

export default Todo;
