
import React, { useState } from "react";
import Live from "./Live";
import styles from "./Livescore.module.css";
// import Result from "./Result";
import Upcomming from "./Upcomming";

const Livescore = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1> LiveScore</h1>
      <div className={styles.container}>
        <div className={styles.nav}>
          <button
            className={show ? styles.active : ""}
            onClick={() => setShow(true)}
          >
            Live
          </button>
          <button
            className={show ? "" : styles.active}
            onClick={() => setShow(false)}
          >
            {/* show ? "" : styles.active */}
            Upcoming
          </button>
          <button
            // className={ styles.active}
            onClick={() => setShow(false)}
          >
            Result
          </button>
        </div>
      </div>
      <div className={styles.main}>
        {show ? <Live /> : <Upcomming />}
        {/* const color = d.y >= 70 ? "green" : d.y >= 50 ? "yellow" : "red"; */}
        {/* condition1 ? result1 : condition2 ? result3 : result4 */}
      </div>
    </div>
  );
};

export default Livescore;
