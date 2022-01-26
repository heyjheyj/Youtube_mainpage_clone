import React, { useRef } from "react";
import styles from "./asideMenu.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faInbox,
  faBox
} from "@fortawesome/free-solid-svg-icons";

const AsideMenu = props => {
  const menuRef = useRef();
  console.log(menuRef);
  if (props.display === "list") {
    menuRef.current.style.display = "none";
  }

  return (
    <aside className={styles.asideMenu} ref={menuRef}>
      <div className={styles.home}>
        <FontAwesomeIcon icon={faHome} />
        <span>홈</span>
      </div>
      <div className={styles.compass}>
        <FontAwesomeIcon icon={faCompass} />
        <span>탐색</span>
      </div>
      <div className={styles.inbox}>
        <FontAwesomeIcon icon={faInbox} />
        <span>구독</span>
      </div>
      <div className={styles.box}>
        <FontAwesomeIcon icon={faBox} />
        <span>보관함</span>
      </div>
    </aside>
  );
};

export default AsideMenu;
