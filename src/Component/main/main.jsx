import React from "react";
import styles from "./main.module.css";
import AsideMenu from "./section/asideMenu/asideMenu";
import Videolist from "./section/videolist/videolist";
import Videos from "../views/video/videos";

const Main = ({ videos, onVideoClick }) => {
  // console.log("[main page]props: ", videos, onVideoClick);

  return (
    <section className={styles.body}>
      <AsideMenu />
      <Videolist />
      <Videos videos={videos} onVideoClick={onVideoClick} />
    </section>
  );
};

export default Main;
