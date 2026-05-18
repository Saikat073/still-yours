import { useEffect, useRef, useState } from "react";
import "./../Intro.css";
import introMusic from "../assets/music/intro.mp3";

export default function IntroPage({ onEnter }) {

  const [showSecond, setShowSecond] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {

    // PLAY INTRO MUSIC
    if (audioRef.current) {
      audioRef.current.volume = 0.5;

      setTimeout(() => {
        audioRef.current.play().catch(() => {
          console.log("Autoplay blocked");
        });
      }, 500);
    }

    // SHOW SECOND TEXT
    const timer1 = setTimeout(() => {
      setShowSecond(true);
    }, 2500);

    // SHOW BUTTON
    const timer2 = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };

  }, []);

  // FADE OUT MUSIC
  const handleEnter = () => {

    const fadeAudio = setInterval(() => {

      if (audioRef.current.volume > 0.05) {
        audioRef.current.volume -= 0.05;
      } else {
        audioRef.current.pause();
        clearInterval(fadeAudio);

        onEnter();
      }

    }, 100);
  };

  return (
    <div className="intro-container">

      {/* INTRO MUSIC */}
      <audio
        ref={audioRef}
        src={introMusic}
      />

      <div className="intro-content">

        <h1 className="fade-text main-text">
          I didn’t know how to say this...
        </h1>

        {showSecond && (
          <p className="fade-text second-text">
            So I made this instead.
          </p>
        )}

        {showButton && (
          <button
            className="heart-button"
            onClick={handleEnter}
          >
            Open my heart ❤️
          </button>
        )}

      </div>
    </div>
  );
}