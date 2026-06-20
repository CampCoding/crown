// import React from "react";

// type videoProps = {
//   embedId: string;
// };

// const YoutubeEmbed = ({ embedId }: videoProps) => {
//   return (
//     <>
//       <iframe
//         width="200"
//         height="100"
//         src={`https://www.youtube.com/embed/${embedId}`}
//         data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         title="Embedded youtube"
//         className="video"
//       />
//     </>
//   );
// };

// export default YoutubeEmbed;


import React from "react";

type VideoProps = {
  src: string;
};

const LocalVideoEmbed = ({ src }: VideoProps) => {
  return (
    <div className="video-wrapper w-full h-full flex items-center justify-center">
      <video
        src={src}
        className="video w-full h-auto max-h-[80vh]"
        controls
        autoPlay
        playsInline
        controlsList="nodownload" // اختياري: لمنع تحميل الفيديو مباشرة
        style={{ width: "100%", height: "100%", borderRadius: "8px" }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LocalVideoEmbed;