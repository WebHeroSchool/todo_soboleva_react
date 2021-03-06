import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';

const App = () => (
  <Router>
     <div className={styles.wrap}>
       <Card className={styles.siderbar}>
          <MenuList>
           <Link to='/'className={styles.link}><MenuItem>About</MenuItem></Link>
           <Link to='/Todo'className={styles.link}><MenuItem>Todo</MenuItem></Link>
           <Link to='/Contacts'className={styles.link}><MenuItem>Contacts</MenuItem></Link>
          </MenuList>
        </Card>  

        <Card className={styles.content}>
              <Route path='/' exact component={About} />
              <Route path='/todo' component={Todo} />
              <Route path='/contacts' component={Contacts} />
        </Card>
    </div>
  </Router>);


export default App;
