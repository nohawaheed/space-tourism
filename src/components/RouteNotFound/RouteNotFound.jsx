import React from "react";
import styles from "./RoteNotFound.module.css";

export default function RouteNotFound() {
  return (
    <>
      <div className={styles.not_found}>
        <p>Not Found This page doesn’t exist.</p>
        <p>If this is a mistake, let us know, and we will try to fix it!</p>
      </div>
    </>
  );
}
