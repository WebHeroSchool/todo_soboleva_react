import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';

const Footer = ({ count }) => (<footer>
<div className={styles.footer}>Осталось выполнить дел: {count}</div>
<div className={styles.button}>
    <Button href="#text-buttons" color="#d3d3d3">
    All
    </Button>
    <Button href="#text-buttons" color="#d3d3d3">
    Active
    </Button>
    <Button href="#text-buttons" color="#d3d3d3">
    Completed
    </Button>
    <Button href="#text-buttons" color="#d3d3d3">
    Clear completed
    </Button>
</div>
</footer>)


export default Footer;
