import React from "react";
import styles from "./MainHeader.module.css";
function MainHeader(props) {
  return <div className={styles.main_header}>{props.children}</div>;
}

export default MainHeader;
