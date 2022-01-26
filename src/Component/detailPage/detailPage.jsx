import React from "react";
import styles from "./detailPage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faPlus,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";

const DetailPage = ({ video }) => {
  return (
    <div className={styles.detailPage}>
      <section className={styles.videoplay}>
        <iframe
          className={styles.video}
          type="text/html"
          title="youtubeVideoList"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        />
      </section>
      <section className={styles.videoInfo}>
        <div className={styles.videotitle}>
          <h3 className={styles.title}>
            {video.snippet.title}
          </h3>
          <span className={styles.date}>
            {video.snippet.publishedAt}
          </span>
          <div className={styles.likedislike}>
            <FontAwesomeIcon icon={faThumbsUp} />8.9천
            <FontAwesomeIcon icon={faThumbsDown} />싫어요
            <FontAwesomeIcon icon={faShare} />공유
            <FontAwesomeIcon icon={faPlus} />저장
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
        <section className={styles.user}>
          <h3>
            Channel: {video.snippet.channelTitle}
          </h3>
          <h5>
            Description: {video.snippet.description}
          </h5>
        </section>
      </section>
    </div>
  );
};

export default DetailPage;
