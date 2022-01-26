import React from "react";
import Video from "./section/video";
import styles from "./videos.module.css";

const Videos = props => {
  const { videos, onVideoClick, display } = props;
  console.log("[videos page]props: ", videos, onVideoClick);

  return display === "none"
    ? <div className={styles.video}>
        <section className={styles.videoRender}>
          {videos &&
            videos.map((video, index) => {
              return (
                <Video key={index} video={video} onVideoClick={onVideoClick} />
              );
            })}
        </section>
      </div>
    : <div className={styles.videolist}>
        <section className={styles.videoRenderlist}>
          {videos &&
            videos.map((video, index) => {
              return (
                <Video
                  key={index}
                  video={video}
                  onVideoClick={onVideoClick}
                  display={display}
                />
              );
            })}
        </section>
      </div>;
};

export default Videos;
