import React from "react";
import styles from "./videolist.module.css";

const suggestlist = [
  {
    id: 1,
    text: "전체"
  },
  {
    id: 2,
    text: "실시간"
  },
  {
    id: 3,
    text: "믹스"
  },
  {
    id: 4,
    text: "음악"
  },
  {
    id: 5,
    text: "만화 영화"
  },
  {
    id: 6,
    text: "요리 프로그램"
  },
  {
    id: 7,
    text: "자연"
  },
  {
    id: 8,
    text: "공예"
  },
  {
    id: 9,
    text: "게임"
  },
  {
    id: 10,
    text: "축구"
  },
  {
    id: 11,
    text: "요리"
  },
  {
    id: 12,
    text: "시각예술"
  },
  {
    id: 13,
    text: "엑션 어드벤처 게임"
  },
  {
    id: 14,
    text: "최근에 업로드된 동영상"
  },
  {
    id: 15,
    text: "감상한 동영상"
  }
];

const Videolist = props => {
  const renderSuggestion = () =>
    suggestlist.map((item, index) =>
      <span className={styles.suggest} key={index}>
        {item.text}
      </span>
    );

  return (
    <div className={styles.videolist}>
      <section className={styles.suggestion}>
        {renderSuggestion()}
      </section>
    </div>
  );
};

export default Videolist;
