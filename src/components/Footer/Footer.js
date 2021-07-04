import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({ count }) => (<footer>
<div className={styles.footer}>Осталось выполнить дел: {count}</div>
<ButtonGroup variant="text" size="small" color="secondary" aria-label="text primary button group">
  <Button>All</Button>
  <Button>Active</Button>
  <Button>Completed</Button>
</ButtonGroup>
</footer>)

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;
