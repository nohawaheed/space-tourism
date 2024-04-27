import React, { useState } from "react";
import styles from "./Crew.module.css";

export default function Crew(props) {
  const [index, setIndex] = useState(0);
  const crew = props.crew;

  return (
    <>
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={`${styles.color_white} bellefair-heading-5`}>
            <span>02</span>
            Meet your crew
          </h1>
        </header>

        <div className={styles.image}>
          {crew[index]?.images.webp && (
            <img
              src={require("../../assets/crew/image-" +
                crew[index]?.name.split(" ").join("-").toLowerCase() +
                ".webp")}
              alt="crew member"
            />
          )}
        </div>

        <div className={styles.content}>
          <div className={`${styles.links} bellefair-nav-text`}>
            <button
              onClick={() => setIndex(0)}
              className={index === 0 ? styles.active : ""}
            ></button>
            <button
              onClick={() => setIndex(1)}
              className={index === 1 ? styles.active : ""}
            ></button>
            <button
              onClick={() => setIndex(2)}
              className={index === 2 ? styles.active : ""}
            ></button>
            <button
              onClick={() => setIndex(3)}
              className={index === 3 ? styles.active : ""}
            ></button>
          </div>
          <div className="content_text">
            <p
              className={`bellefair-heading-4 ${styles.color_white} ${styles.role}`}
            >
              {crew[index]?.role}
            </p>
            <h2
              className={`${styles.color_white} ${styles.crew_h2} bellefair-heading-3`}
            >
              {crew[index]?.name}
            </h2>
            <p className="bellefair-body-text">{crew[index]?.bio}</p>
          </div>
        </div>
      </article>
    </>
  );
}
