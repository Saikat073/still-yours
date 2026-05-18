import { useEffect, useRef, useState } from "react";
import "./../Intro.css";
import introMusic from "../assets/music/intro.mp3";

export default function IntroPage({ onEnter }) {

  const [showSecond, setShowSecond] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {

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

  // START INTRO EXPERIENCE
  const handleEnter = async () => {

    if (audioRef.current) {

      audioRef.current.volume = 0.5;

      try {

        // PLAY INTRO SONG
        await audioRef.current.play();

        // AFTER SONG ENDS → OPEN MAIN WEBSITE
        audioRef.current.onended = () => {
          onEnter();
        };

      } catch (err) {

        console.log("Audio play blocked");

        // OPEN WEBSITE ANYWAY
        onEnter();
      }
    }
  };

  return (
    <div className="intro-container">

      {/* INTRO AUDIO */}
      <audio
        ref={audioRef}
        src={introMusic}
      />

      <div className="intro-content">

        {/* FIRST TEXT */}
        <h1 className="fade-text main-text">
          I didn’t know how to say this...
        </h1>

        {/* SECOND TEXT */}
        {showSecond && (
          <p className="fade-text second-text">
            So I made this instead.
          </p>
        )}

        {/* BUTTON */}
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