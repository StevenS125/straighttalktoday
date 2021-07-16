import React, { Component } from 'react';
import styles from "./Nav.module.scss";
import { Link } from 'react-router-dom';



class Header extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        open: false,
                        bar1: styles.bar1,
                        bar2: styles.bar2,
                        bar3: styles.bar3
                };
}


// Mobile Nav links held when burger clicked
openList = () => {
        return (
                <div className={styles.listContainer}>
          <ul style={{ listStyle: 'none'}}>
                <li onClick={ this.closeList }><Link className={styles.links} to="/">Home</Link></li> 
                <li onClick={ this.closeList }><Link className={styles.links} to="/Services">Services</Link></li>  
                <li onClick={ this.closeList }><Link className={styles.links}  to="/Bio">About</Link></li>
                <li onClick={ this.closeList }><Link className={styles.links} to="/Contact">Contact</Link></li>
          </ul>
                </div>
        );
      }



//  toggles burger style to x, normal and opens list of nav links on mobile
      openDropDown = () => {
        if (!this.state.open) {
                this.setState({
                        open: true,
                        bar1: styles.barChange1,
                        bar2: styles.barChange2,
                        bar3: styles.barChange3
                      });
        } else {
                this.setState({
                        open: false,
                        bar1: styles.bar1,
                        bar2: styles.bar2,
                        bar3: styles.bar3
                });
        }
        
      }


render() {          

        return (
        // navigation container start
    <div id="myNav" className={styles.container}>
        <div className={styles.Nav}> 
        {/* desktop Navigation container start */}
        <div className={styles.masthead}>
        <img src="../../LOGO.jpg" alt="Straight talk today logo" className={styles.logoimg}/>
        Straight Talk Consulting Inc
        </div> 
                <Link className={styles.links} to="/Contact">Contact</Link> 
                <Link className={styles.links} to="/Services">Services</Link>  
                <Link className={styles.links}  to="/Bio">About</Link>
                <Link className={styles.links} to="/">Home</Link>  
        </div>
                {/* burger container */}
              <div className={styles.navTitle}>
                <div onClick={ this.openDropDown } className={styles.burgContainer}>
                        <div className={this.state.bar1}></div>
                        <div className={this.state.bar2}></div>
                        <div className={this.state.bar3}></div>

        <div>{ this.state.open ? this.openList() : false }</div> 
  </div>
         <div >
                <span>Straight Talk Consulting Inc</span>
         </div>  
      </div>
        </div>
);
}
}
export default Header
