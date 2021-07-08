import React from 'react';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
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

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};


export default ItemList;
