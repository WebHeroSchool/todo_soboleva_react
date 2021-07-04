import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';


class Item extends React.Component {
    componentDidMount() {
      this.timerId = setInterval(() => console.log('interval'), 1000);
    }
    componentWillUnmount() {
      clearInterval (this.timerId);
    }

render () {
    const {value, isDone, id, onClickDone, onClickDelete} = this.props;
    return(
         <div className={styles.wrap}>
         <Checkbox
                checked={isDone}
                color="default"
               inputProps={{ 'aria-label': 'primary checkbox'}}
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
              onClick = {() => onClickDelete(id)}
          />
          </div>);
  }
}


    Item.propTypes = {
      value: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      onClickDone: PropTypes.func.isRequired,
      onClickDelete: PropTypes.func.isRequired
    };

export default Item;
