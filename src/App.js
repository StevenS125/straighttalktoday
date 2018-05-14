import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Header from './Header/Header';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Bio from './Bio/Bio';
import Nav from './Nav/Nav';

//styles
import styles from './App.module.scss';
import Advert from  './Advert/Advert'

//modules


class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.container}>
        <Nav />
          <Switch>
        <Route exact path="/" component={Advert}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/bio" component={Bio}/>
        </Switch>
        <Contact />
        <Footer />
    </div>
    </Router>
    );
  }
}

export default App;
