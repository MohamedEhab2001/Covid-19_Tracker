import React from "react";
import { SpinnerDotted } from "spinners-react";
import styles from "./Loading.module.css";
function Loading() {
  return (
    <div className={styles.container}>
      <SpinnerDotted
        size={86}
        thickness={180}
        speed={100}
        color="rgba(172, 57, 59, 1)"
      />
    </div>
  );
}

export default Loading;
