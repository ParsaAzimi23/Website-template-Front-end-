import React from "react";
import styles from "./App.module.css"
import Banner from "./components/Banner";
import Body from "./components/Body";
 
function App() {
  return (
    <div className={styles.container}>
      <Banner />
      <Body />
    </div>
  );
}

export default App;
