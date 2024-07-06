import { useCallback, useEffect, useRef, useState } from "react";
import "./index.scss";

const src = new URL("/assets/dunglamtraitimanhdau.mp3", import.meta.url).href;

export const ImageMemory = () => {
  const imageMemoryList = [
    {
      key: 1,
      url: "images/picture_1.jpg",
    },
    {
      key: 2,
      url: "images/picture_3.jpg",
    },
    {
      key: 3,
      url: "images/picture_4.jpg",
    },
    {
      key: 4,
      url: "images/picture_5.jpg",
    },
    {
      key: 5,
      url: "images/picture_6.jpg",
    },
  ];

  const audioRef = useRef<HTMLAudioElement>(new Audio(src));
  const [showHeart, setShowHeart] = useState(false);
  const [showfinalText, setShowFinalText] = useState(false);
  const onEnded = useCallback(() => {
    setShowFinalText(true);
    setShowHeart(false);
  }, []);
  useEffect(() => {
    audioRef.current.load();
    audioRef.current.play();
    setTimeout(() => {
      console.log("abcccc");
      setShowHeart(true);
    }, 6500);
  }, [audioRef]);

  return (
    <div className="image-memory-page">
      <audio {...{ src, ref: audioRef, preload: "auto", onEnded }} />
      <div className="container-image">
        <div className="slides">
          {imageMemoryList.map((img) => (
            <div
              className="slide"
              style={{ animationDelay: `${img.key * 6}s` }}
              key={img.key}
            >
              <img src={img.url} />
            </div>
          ))}
          {showHeart && (
            <div className="hearts">
              <dotlottie-player
                src="/assets/heart.lottie"
                autoplay
                loop
                style={{
                  zIndex: 30,
                  visibility: "visible",
                  width: 320,
                }}
              />
            </div>
          )}
          {!showHeart && !showfinalText && (
            <div className="lyric-container">
              <div className="lyric">Mãi theo sau mình em thôi</div>
              <div className="lyric">Mãi si mê mình em thôi</div>
              <div className="lyric">Mãi yêu thương mình em...</div>
            </div>
          )}
          {showfinalText && <div className="final-text">I Love You</div>}
        </div>
      </div>
    </div>
  );
};
