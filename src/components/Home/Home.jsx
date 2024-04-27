import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.subheading} bellefair-heading-5`}>
            So, you want to travel to
            <span className={`${styles.heading} bellefair-heading-1`}>
              Space
            </span>
          </h1>
          <p className="bellefair-body-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.explore}>
          <Link to={"/destination"}>Explore</Link>
        </div>
      </div>
    </>
  );
}
