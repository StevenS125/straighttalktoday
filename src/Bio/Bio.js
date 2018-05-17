import React, { Component } from 'react';
import styles from './Bio.module.scss';




class Bio extends Component {


  render() {
    return (
      <div>
          <div className={styles.aboutHero}>
          <img src="../../biophoto.jpg" alt="Straight talk today logo" className={styles.biopic}/>
          <div className={styles.heroSlogan}>Straight Talk but Straight Understanding &nbsp; &nbsp; &nbsp;
          <span>-Kevin Holmes</span>
    </div>

          </div>
<div className={styles.aboutPhoto}>

</div>
          <div className={styles.aboutText}> 

          </div>

</div>
    );
  }
}

export default Bio;
