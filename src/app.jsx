import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Component/navbar/navbar";
import Main from "./Component/main/main";
import DetailPage from "./Component/detailPage/detailPage";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selecteVideo = videos => {
    // console.log(videos);
    setSelectedVideo(videos);
  };

  const fetchVideoList = async q => {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=${process
        .env.YOUTUBE_API_KEY}`;
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

  // useEffect(() => {
  //   fetchVideoList("");
  // }, []);

  return (
    <div className={styles.youtube}>
      <Navbar fetchVideoList={fetchVideoList} />
      <div className={styles.videoSection}>
        {selectedVideo && <DetailPage video={selectedVideo} />}
        <Main videos={videos} onVideoClick={selecteVideo} />
      </div>
    </div>
  );
}

export default App;
