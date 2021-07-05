import React from 'react';
import List from '@material-ui/core/List';
import styles from './ItemList.module.css';
import Item from '../Item/Item';

const ItemList = ({items, onClickDone, onClickDelete}) => (<List>
    {items.map(item => <li key={item.id}>
        <Item
          value={item.value}
          isDone={item.isDone}
          id={item.id}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}/>
    </li>)}
</List>);

ItemList.defaultProps = {
  value: 'Добавить новое задание',
  isDone: false,
  id: 0
};


export default ItemList;
