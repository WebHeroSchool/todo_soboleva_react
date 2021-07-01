import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';


const Item = ({value, isDone, onClickDone}) =>
    <div className={styles.wrap}>
		<Checkbox
          checked={isDone}
          color="default"
	        inputProps={{ 'aria-label': 'primary checkbox' }}
            onClick={() => onClickDone(isDone)}
	  />
		<label className = {
			classnames({
				[styles.item]: true,
				[styles.done]: isDone
			})
		}> {value}
    </label>
       <DeleteIcon className={styles.btn} fontSize="large" />
    </div>;

export default Item;
