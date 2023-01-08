import React from 'react';
import styles from "./Body.module.css"

const Body = () => {
    return (
        <div className={styles.container}>
            <p className={styles.number1}>01 <span>Get Started<br/>What makes you feel <span className={styles.otherFont}>comfortabel</span> ?</span></p>
            {/* <p className={styles.number1Text}>What makes you feel comfortabel?</p> */}
        </div>
    );
};

export default Body;