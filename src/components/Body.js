import React from 'react';
import styles from "./Body.module.css"
import Image from "../Images/3.jfif"
import Image2 from "../Images/2.jfif"

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
                <h3 className={styles.text1}>How do you feel about <span className={styles.otherFont}>Camping</span> ?</h3>
                <img src={Image2} alt='02'/>
                <p className={styles.secondText}>Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Earum quam inventore providen
                     t, voluptas est cum facilis dolores rem commod
                     i libero excepturi repellat, 
                    aspernatur, mollitia nam. Porro recusandae dolorem ad aspernatur!
                </p>
            </div>
        </div>
    );
};

export default Body;