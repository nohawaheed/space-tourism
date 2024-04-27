import React, { useEffect, useState } from "react";
import styles from "./Technology.module.css";

export default function Technology(props) {
  const [index, setIndex] = useState(0);
  const technology = props.technology;
  const isDesktop = window.matchMedia("(min-width: 64em)");
  const [matches, setMatches] = useState(isDesktop.matches);
  const orientation = matches ? "-portrait.jpg" : "-landscape.jpg";

  useEffect(() => {
    const handleMatch = () => setMatches(isDesktop.matches);
    window.addEventListener("resize", handleMatch);
    return () => window.removeEventListener("resize", handleMatch);
  });

  return (
    <>
      <article className={styles.container}>
        <div className={styles.header}>
          <h1 className={`${styles.color_white} bellefair-heading-5`}>
            <span>03</span>
            SPACE LAUNCH 101
          </h1>
        </div>

        <div className={styles.image}>
          {technology[index]?.images && (
            <img
              src={
                index === 0
                  ? require("../../assets/technology/image-launch-vehicle" +
                      orientation)
                  : index === 1
                  ? require("../../assets/technology/image-spaceport" +
                      orientation)
                  : require("../../assets/technology/image-space-capsule" +
                      orientation)
              }
              alt="technology"
            />
          )}
        </div>

        <div className={styles.content}>
          <div className={`${styles.links} bellefair-nav-text`}>
            <button
              onClick={() => setIndex(0)}
              className={index === 0 ? styles.active : ""}
            >
              1
            </button>
            <button
              onClick={() => setIndex(1)}
              className={index === 1 ? styles.active : ""}
            >
              2
            </button>
            <button
              onClick={() => setIndex(2)}
              className={index === 2 ? styles.active : ""}
            >
              3
            </button>
          </div>
          <div className="content_text">
            <h2
              className={`${styles.color_white} ${styles.technology_h2} bellefair-heading-3`}
            >
              {technology[index]?.name}
            </h2>
            <p className="bellefair-body-text">
              {technology[index]?.description}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
