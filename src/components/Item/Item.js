import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';


const Item = ({ value, isDone, onClickDone, onClickDelete, id }) => (
    <div className={styles.wrap}>
		<Checkbox
            checked={isDone}
	        color="default"
	        inputProps={{ 'aria-label': 'primary checkbox' }}
            onClick={() => onClickDone(id)}
	      />
		<label className = {
			classnames({
				[styles.item]: true,
				[styles.done]: isDone
			})
		}> {value}
		</label>
             <DeleteIcon className={styles.btn} fontSize="large"
             onClick={() => onClickDelete(id)} />
       </div>);

export default Item;