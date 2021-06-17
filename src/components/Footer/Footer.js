import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';

const Footer = ({ count }) => (<footer>
<div className={styles.footer}>Осталось выполнить дел: {count}</div>
<div className={styles.button}>
    <Button href="#text-buttons" color="#d3d3d3" style={{ fontSize: '8px'}}>
    All
    </Button>
    <Button href="#text-buttons" color="#d3d3d3" style={{ fontSize: '8px'}}>
    Active
    </Button>
    <Button href="#text-buttons" color="#d3d3d3" style={{ fontSize: '8px'}}>
    Completed
    </Button>
    <Button href="#text-buttons" color="#d3d3d3" style={{ fontSize: '8px'}}>
    Clear completed
    </Button>
</div>
</footer>)

Footer.defaultProps = {
    count: 0
};

export default Footer;
