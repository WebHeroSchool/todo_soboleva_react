import React from 'react';
import List from '@material-ui/core/List';
import styles from './ItemList.module.css';
import Item from '../Item/Item';

const ItemList = ({ items }) =>
<div className={styles.ItemList}>
    {items.map(item =>
    <Item key={item.value}
        Item value={item.value}
        isDone={item.isDone} />
    )}
</div>;

export default ItemList;
