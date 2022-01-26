import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Component/navbar/navbar";
import Main from "./Component/main/main";
import DetailPage from "./Component/detailPage/detailPage";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [windowWidth, setWindowWidth] = useState(700);

  const selecteVideo = videos => {
    setSelectedVideo(videos);
    window.scrollTo(0, 0);
  };

  const setWidth = () => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  };

  useEffect(
    () => {
      setWidth();
    },
    [windowWidth]
  );

  const fetchVideoList = async q => {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=AIzaSyCeU0xON4Cu5hMlyS0E8jqP7NgPBP0-tTM`;
      const result = await axios.get(url);
      const videoData = result.data;
      const videoItemList = videoData.items.map(item => ({
        ...item,
        id: item.id.videoId
      }));
      setVideos(videoItemList);
      setSelectedVideo(null);
    } catch (error) {
      console.error("failed to request video list from youtube:", error);
    }
  };

  useEffect(() => {
    fetchVideoList("");
  }, []);

  return (
    <div className={styles.youtube}>
      <Navbar fetchVideoList={fetchVideoList} windowWidth={windowWidth} />
      <div className={styles.videoSection}>
        {selectedVideo &&
          <div className={styles.detailpage}>
            <DetailPage video={selectedVideo} />
          </div>}
        <div className={selectedVideo ? styles.mainpageSV : styles.mainpage}>
          <Main
            videos={videos}
            onVideoClick={selecteVideo}
            display={selectedVideo ? "list" : "none"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
