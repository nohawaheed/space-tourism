import React, { useState } from "react";
import styles from "./Destination.module.css";

export default function Destination(props) {
  const [index, setIndex] = useState(0);
  const destination = props.destination;

  return (
    <>
      <article className={styles.container}>
        <div className={styles.header}>
          <h1 className={`${styles.color_white} bellefair-heading-5`}>
            <span>01</span>
            Pick your destination
          </h1>
          <div className={styles.image}>
            {destination[index]?.images.webp && (
              <img
                src={require("../../assets/destination/image-" +
                  destination[index].name.toLowerCase() +
                  ".webp")}
                alt="planet"
              />
            )}
          </div>
        </div>
        <div className={styles.content}>
          <div className={`${styles.links} bellefair-nav-text`}>
            <button
              onClick={() => setIndex(0)}
              className={index === 0 ? styles.active : ""}
            >
              Moon
            </button>
            <button
              onClick={() => setIndex(1)}
              className={index === 1 ? styles.active : ""}
            >
              Mars
            </button>
            <button
              onClick={() => setIndex(2)}
              className={index === 2 ? styles.active : ""}
            >
              Europa
            </button>
            <button
              onClick={() => setIndex(3)}
              className={index === 3 ? styles.active : ""}
            >
              Titan
            </button>
          </div>
          <h2 className={`${styles.destination_h2} bellefair-heading-2`}>
            {destination[index]?.name}
          </h2>
          <p className={`${styles.description} bellefair-body-text`}>
            {destination[index]?.description}
          </p>
          <div className={styles.footer}>
            <p className="bellefair-subheading-1">
              <span className="bellefair-subheading-2">{"AVG. DISTANCE"}</span>
              {destination[index]?.distance}
            </p>
            <p className="bellefair-subheading-1">
              <span className="bellefair-subheading-2">
                {"EST. TRAVEL TIME"}
              </span>
              {destination[index]?.travel}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
