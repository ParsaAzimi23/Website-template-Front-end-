import React from 'react';
import styles from "./Banner.module.css"
import Image from "../Images/1.jfif"
import Header from './Header';

const Banner = () => {
    return (
        <div className={styles.container}>
            <Header />
            <img src={Image} alt="Banner"/>
            <div className={styles.animatedText}>
                <p>Choose Your Destination</p>
                <h2>Wisely</h2>
            </div>
            <div className={styles.fader}></div>
            
        </div>
    );
};

export default Banner;