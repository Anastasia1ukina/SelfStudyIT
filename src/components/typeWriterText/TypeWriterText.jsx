import * as React from "react";
import styles from "./TypeWriterText.module.css";

export const TypeWriterText = ({ children }) => {
  return <span className={styles.typewriter}>{children}</span>;
};
