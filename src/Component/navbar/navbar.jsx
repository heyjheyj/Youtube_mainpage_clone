import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faMicrophone,
  faFilm,
  faBell,
  faTh,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ fetchVideoList, windowWidth }) => {
  const [inputValue, setInputValue] = useState("");
  const [showInputbox, setShowInputbox] = useState(false);

  const refresh = () => {
    window.location.reload()
  }

  useEffect(() => {
    if (windowWidth > 660) {
      setShowInputbox(false);
    }
  }, [windowWidth])

  const searchInputValue = e => {
    console.log(e.target.value)
    setInputValue(e.target.value);
  };

  const searchVideo = (e) => {
    console.log('search')
    e.preventDefault();
    fetchVideoList(inputValue);
  };

  return (
    <section className={styles.navbar}>
      <div className={styles.displayIcons}>
          {windowWidth > 660 ? <>
            <div className={styles.logo}>
          <FontAwesomeIcon icon={faBars} />
          <div className={styles.logoIcon} onClick={refresh}>
            <FontAwesomeIcon
              icon={faYoutube}
              className={`${styles.youtubeicon}`}
            />
            <span className={styles.logoText}>YouTube</span>
          </div>
        </div>
            <form className={styles.searchBar}>
          <input
            placeholder="검색"
            type="text"
            onChange={searchInputValue}
            className={styles.searchInput}
          />
          <button
            type="submit"
            onClick={searchVideo}
            className={styles.searchIcon}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <div className={styles.microphone}>
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
          </form>
        <div className={styles.navbarRight}>
          <FontAwesomeIcon icon={faFilm} />
          <FontAwesomeIcon icon={faTh} />
          <FontAwesomeIcon icon={faBell} />
          <div className={styles.profile}>A</div>
        </div>
          </> : !showInputbox ? <>
          <div className={styles.logo}>
          <FontAwesomeIcon icon={faBars} />
          <div className={styles.logoIcon}>
            <FontAwesomeIcon
              icon={faYoutube}
              className={`${styles.youtubeicon}`}
            />
            <span className={styles.logoText}>YouTube</span>
          </div>
        </div>
          <div className={styles.navbarRightSM}>
            <button
            onClick={() => setShowInputbox(true)}
            className={styles.searchIcon}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <FontAwesomeIcon icon={faMicrophone} />
            <FontAwesomeIcon icon={faFilm} />
            <FontAwesomeIcon icon={faTh} />
            <FontAwesomeIcon icon={faBell} />
            <div className={styles.profile}>A</div>
          </div>
          </> : <form className={styles.searchBar}>
            <button className={styles.hideinput} onClick={() => setShowInputbox(false)}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          <input
            placeholder="검색"
            type="text"
            onChange={searchInputValue}
            className={styles.searchInput}
            onBlur={() => setShowInputbox(false)}
          />
          <button
            onClick={searchVideo}
            className={styles.searchIconSM}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <div className={styles.microphone}>
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
          </form> }
      </div>
    </section>
  );
};

export default Navbar;
