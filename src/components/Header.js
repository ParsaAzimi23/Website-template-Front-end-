import React from 'react';
import styles from "./Header.module.css"
const Header = () => {
    return (
        <div className={styles.container}>
            <h1>Name</h1>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Guide</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;