import React, { Component } from 'react';
import styles from "./Header.module.scss";
import Burger from './Burger'


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
    <img src="../../homehero.jpg" alt="piranha" className={styles.container}/>
        <div className={styles.Nav}> 
        <h1>
        <div className={styles.masthead}>Straight Talk Today</div> 
        </h1>
        <h2>
        <div className={styles.links}><a>About</a></div>
        <div className={styles.links}><a>Contact</a></div> 
        <div className={styles.links}><a>Bio</a></div> 
        <div className={styles.links}><a href="/services">Services</a></div>  
</h2>
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
<div className={styles.heroSlogan}>Have Kevin Holmes motivate your audience at your next event &nbsp; &nbsp; &nbsp;
<button className={styles.heroButton}>Learn How</button>
</div>
        </div>
);
}
}
export default Header