import React from "react";
import Video from "./section/video";
import styles from "./videos.module.css";

const Videos = props => {
  const { videos, onVideoClick } = props;
  console.log("[videos page]props: ", videos, onVideoClick);

  return (
    <div className={styles.video}>
      <section className={styles.videoRender}>
        {videos &&
          videos.map((video, index) => {
            return (
              <Video key={index} video={video} onVideoClick={onVideoClick} />
            );
          })}
      </section>
    </div>
  );
};

export default Videos;
