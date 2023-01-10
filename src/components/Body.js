import React from 'react';
import styles from "./Body.module.css"
import Image from "../Images/3.jfif"

const Body = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p className={styles.number1}>01 <span>Get Started<br/>What makes you feel <span className={styles.otherFont}>comfortabel</span> ?</span></p>
                <img src={Image} alt='01'/>
                <p className={styles.number2}>Lorem, ipsum dolor sit amet conse
                ctetur adipisicing elit. Unde hic  placeat, culpali ber oani miex p lica boqui,eos n e cessitatibus 
                reprehenderit aspernatur nihil nam at, quos praesentium.</p>
            </div>
            <div className={styles.container2}>
                <p className={styles.number3}>02</p>
            </div>
        </div>
    );
};

export default Body;