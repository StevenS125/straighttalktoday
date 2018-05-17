import React, { Component } from 'react';
import styles from "./Nav.module.scss";
import Burger from './Burger'
import { Link } from 'react-router-dom';


class Header extends Component {
        constructor(props) {
                super(props);
                this.state = {
                  open: [false]
                };
} 

handleClick(id) {
        let { open } = this.state;
this.setState({
                open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
        });
}

render() {
        return (
    <div id="myNav" className={styles.container}>
        <div className={styles.Nav}> 
        
        <div className={styles.masthead}>
        <img src="../../LOGO.jpg" alt="Straight talk today logo" className={styles.logoimg}/>
        Straight Talk Today
                </div> 
                <Link className={styles.links} to="/Services">Services</Link>  
        <Link className={styles.links}  to="/Bio">About</Link>
        <Link className={styles.links} to="/">Home</Link>  
<div className={styles.menurow}>
<Burger
					isOpen={this.state.open[1]}
					menuClicked={this.handleClick.bind(this, 1)}
					width={54}
					height={45}
					strokeWidth={3}
					rotate={0}
					color='white'
					borderRadius={5}
					animationDuration='0.4'
				/>
                                </div>
        </div>
        </div>
);
}
}
export default Header