import * as React from "react";
import styles from "./TypeWriterText.module.css";

export const TypeWriterText = ({ children }) => {
  return (
    <div className={styles.typewriter}>{children}</div>
  )
};
