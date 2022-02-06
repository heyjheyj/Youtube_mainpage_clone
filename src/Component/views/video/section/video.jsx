import React from "react";
import styles from "./video.module.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClock,
//   faStream
// } from "@fortawesome/free-solid-svg-icons";

const Video = ({ video, onVideoClick, display }) => {
  const videoinfo = video.snippet;

  return display === "list"
    ? <li
        className={styles.videoCardList}
        onClick={() => onVideoClick(video)}
        title={videoinfo.title}
      >
        <img
          className={styles.videoImageList}
          src={videoinfo.thumbnails.medium.url}
          alt={videoinfo.channelTitle}
        />
        <div className={styles.videoDetailList}>
          <span className={styles.videoTitleList}>
            {videoinfo.title}
          </span>
          <span className={styles.userList}>
            {videoinfo.channelTitle}
          </span>
          <span className={styles.viewsList}>
            {videoinfo.publishedAt}
          </span>
        </div>
        {/* <section className={styles.hover}>
      <div className={styles.watchlater}>
        <FontAwesomeIcon icon={faClock} />
        <span className={styles.watchlaterText}>
            나중에 볼 동영상
        </span>
      </div>
      <div className={styles.addToList}>
        <FontAwesomeIcon icon={faStream} />
        <span className={styles.watchlaterText}>
            보관함에 추가
        </span>
      </div>
    </section> */}
      </li>
    : <li
        className={styles.videoCard}
        onClick={() => onVideoClick(video)}
        title={videoinfo.title}
      >
        <img
          className={styles.videoImage}
          src={videoinfo.thumbnails.medium.url}
          alt={videoinfo.channelTitle}
        />
        <div className={styles.videoInfo}>
          <img
            src={videoinfo.thumbnails.medium.url}
            alt="user"
            className={styles.userImage}
          />
          <div className={styles.videoDetail}>
            <span className={styles.videoTitle}>
              {videoinfo.title}
            </span>
            <span className={styles.user}>
              {videoinfo.channelTitle}
            </span>
            <span className={styles.views}>
              {videoinfo.publishedAt}
            </span>
          </div>
        </div>
        {/* <section className={styles.hover}>
        <div className={styles.watchlater}>
          <FontAwesomeIcon icon={faClock} />
          <span className={styles.watchlaterText}>
              나중에 볼 동영상
          </span>
        </div>
        <div className={styles.addToList}>
          <FontAwesomeIcon icon={faStream} />
          <span className={styles.watchlaterText}>
              보관함에 추가
          </span>
        </div>
      </section> */}
      </li>;
};

export default Video;
