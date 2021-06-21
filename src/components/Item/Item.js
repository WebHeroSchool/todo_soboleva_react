import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';


const Item = ({ value, isDone}) =>
    <div className={styles.wrap}>
		<Checkbox
          color="default"
          value="default"
	        inputProps={{ 'aria-label': 'primary checkbox' }}
	      />
		<span className = {
			classnames({
				[styles.item]: true,
				[styles.done]: isDone
			})
		}> {value}
    </span>
             <DeleteIcon className={styles.btn} fontSize="large" />
    </div>;

export default Item;
