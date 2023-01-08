import React from 'react';
import styles from "./Header.module.css"
const Header = () => {
    return (
        <div className={styles.container}>
            <h1>CYDW</h1>
            <ul className={styles.listHolder}>
                <li>Home</li>
                <li>Guide</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
};

export default Header;