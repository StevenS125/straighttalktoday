import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Header from './Header/Header';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Bio from './Bio/Bio';

//styles
import styles from './App.module.scss';
import Advert from  './Advert/Advert';
import Services from  './Services/Services'

//modules


class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.container}>
          <Header />
          <Switch>
        <Route exact path="/" component={Advert}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/services" component={Services}/>

        </Switch>
        <Footer />
    </div>
    </Router>
    );
  }
}

export default App;
