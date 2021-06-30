import React from 'react';
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


export default Footer;
