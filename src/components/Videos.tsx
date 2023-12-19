import React from "react";
import videos from "../components/Video";

interface Video {
  id: number;
  title: string;
  src: string;
}

const Videos: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
      {videos.map((item) => (
        <div className="pt-6" key={item.id}>
          <iframe
            className="rounded"
            width="100%"
            height="145"
            src={item.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="mx-4">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Videos;
